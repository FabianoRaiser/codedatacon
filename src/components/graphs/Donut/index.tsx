// src/components/GraficoDonut.tsx
import React, { useEffect, useState } from 'react';
import { DonutChart } from '@mantine/charts';
import { Title, Select, LoadingOverlay, Text, Group, Badge, Box } from '@mantine/core';
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
    <CustomCard color="cyan">
      <Group justify="space-between" mb="lg">
        <Title 
          order={3}
          style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {title}
        </Title>
        <Select
          value={selectedType}
          onChange={(value) => setSelectedType(value as 'gender' | 'segment' | 'level' | 'state')}
          data={chartTypes}
          size="sm"
          w={200}
          styles={{
            input: {
              background: 'rgba(255,255,255,0.9)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '12px',
            }
          }}
        />
      </Group>
      
      {error && (
        <Text c="red" size="sm" mb="md">
          {error}
        </Text>
      )}

      <Box style={{ position: 'relative', minHeight: 350 }}>
        <LoadingOverlay visible={loading} />
        
        {!loading && data.length > 0 && (
          <>
            <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <DonutChart
                data={data}
                size={250}
                thickness={25}
                paddingAngle={3}
                strokeWidth={2}
                withLabels
                withTooltip
                tooltipDataSource="segment"
                styles={{
                  root: {
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  }
                }}
              />
            </Box>
            
            <Box 
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '1rem',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Group gap="xs" wrap="wrap" justify="center">
                {data.map((item, index) => (
                  <Badge 
                    key={index}
                    variant="gradient"
                    gradient={{ 
                      from: item.color.replace('.6', '').replace('.3', '').replace('.5', '').replace('.7', '').replace('.9', ''), 
                      to: item.color.replace('.6', '').replace('.3', '').replace('.5', '').replace('.7', '').replace('.9', ''),
                      deg: 45 
                    }}
                    size="md"
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {item.name}: {item.value} ({((item.value / totalValue) * 100).toFixed(1)}%)
                  </Badge>
                ))}
              </Group>
            </Box>
            
            <Text 
              size="sm" 
              c="dimmed" 
              ta="center" 
              mt="md"
              style={{
                background: 'rgba(255,255,255,0.8)',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 600,
              }}
            >
              Total: {totalValue} participantes
            </Text>
          </>
        )}
        
        {!loading && data.length === 0 && !error && (
          <Text c="dimmed" ta="center" py="xl">
            Nenhum dado disponível para exibição
          </Text>
        )}
      </Box>
    </CustomCard>
  );
};

export default GraficoDonut;