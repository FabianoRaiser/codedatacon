// src/components/GraficoDonut.tsx
import React, { useEffect, useState } from 'react';
import { DonutChart } from '@mantine/charts';
import { Title, Select, LoadingOverlay, Text, Group, Badge } from '@mantine/core';
import { CustomCard } from '../../Card';
import { 
  getGenderDonutData, 
  getCompanySegmentDonutData, 
  getPositionLevelDonutData, 
  getStateDonutData,
  type DonutData 
} from '../../../api/getDonutData';

interface GraficoDonutProps {
  title?: string;
  defaultType?: 'gender' | 'segment' | 'level' | 'state';
}

const GraficoDonut: React.FC<GraficoDonutProps> = ({ 
  title = "Distribuição de Participantes", 
  defaultType = 'gender' 
}) => {
  const [data, setData] = useState<DonutData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState(defaultType);
  const [error, setError] = useState<string | null>(null);

  const chartTypes = [
    { value: 'gender', label: 'Por Gênero' },
    { value: 'segment', label: 'Por Segmento da Empresa' },
    { value: 'level', label: 'Por Nível Hierárquico' },
    { value: 'state', label: 'Por Estado' }
  ];

  const loadData = async (type: string) => {
    setLoading(true);
    setError(null);
    
    try {
      let chartData: DonutData[] = [];
      
      switch (type) {
        case 'gender':
          chartData = await getGenderDonutData();
          break;
        case 'segment':
          chartData = await getCompanySegmentDonutData();
          break;
        case 'level':
          chartData = await getPositionLevelDonutData();
          break;
        case 'state':
          chartData = await getStateDonutData();
          break;
        default:
          chartData = await getGenderDonutData();
      }
      
      setData(chartData);
    } catch (err) {
      setError('Erro ao carregar dados do gráfico');
      console.error('Erro ao carregar dados:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(selectedType);
  }, [selectedType]);

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <CustomCard>
      <Group justify="space-between" mb="md">
        <Title order={3}>{title}</Title>
        <Select
          value={selectedType}
          onChange={(value) => setSelectedType(value as any)}
          data={chartTypes}
          size="sm"
          w={200}
        />
      </Group>
      
      {error && (
        <Text c="red" size="sm" mb="md">
          {error}
        </Text>
      )}

      <div style={{ position: 'relative', minHeight: 300 }}>
        <LoadingOverlay visible={loading} />
        
        {!loading && data.length > 0 && (
          <>
            <DonutChart
              data={data}
              size={200}
              thickness={20}
              paddingAngle={2}
              strokeWidth={1}
              withLabels
              withTooltip
              tooltipDataSource="segment"
            />
            
            <Group mt="md" gap="xs" wrap="wrap">
              {data.map((item, index) => (
                <Badge 
                  key={index}
                  variant="dot"
                  color={item.color.replace('.6', '').replace('.3', '').replace('.5', '').replace('.7', '').replace('.9', '')}
                  size="sm"
                >
                  {item.name}: {item.value} ({((item.value / totalValue) * 100).toFixed(1)}%)
                </Badge>
              ))}
            </Group>
            
            <Text size="sm" c="dimmed" mt="sm">
              Total: {totalValue} participantes
            </Text>
          </>
        )}
        
        {!loading && data.length === 0 && !error && (
          <Text c="dimmed" ta="center" py="xl">
            Nenhum dado disponível para exibição
          </Text>
        )}
      </div>
    </CustomCard>
  );
};

export default GraficoDonut;