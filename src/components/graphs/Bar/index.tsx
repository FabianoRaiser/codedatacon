// src/components/GraficoBarra.tsx
import React from "react";
import { BarChart } from "@mantine/charts";
import { Title, Box, Text, Group, Badge } from "@mantine/core";
import { CustomCard } from "../../Card";

const GraficoBarra: React.FC = () => {
  const data = [
    { periodo: "Dia 1", Participantes: 120, Eventos: 8, Tokens: 45 },
    { periodo: "Dia 2", Participantes: 180, Eventos: 12, Tokens: 78 },
    { periodo: "Dia 3", Participantes: 220, Eventos: 15, Tokens: 95 },
    { periodo: "Dia 4", Participantes: 195, Eventos: 10, Tokens: 82 },
    { periodo: "Dia 5", Participantes: 250, Eventos: 18, Tokens: 110 },
  ];

  const totalParticipantes = data.reduce((sum, item) => sum + item.Participantes, 0);
  const totalEventos = data.reduce((sum, item) => sum + item.Eventos, 0);
  const totalTokens = data.reduce((sum, item) => sum + item.Tokens, 0);

  return (
    <CustomCard color="violet">
      <Title 
        order={3} 
        mb="lg"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        📈 Evolução do Evento por Dia
      </Title>

      {/* Estatísticas resumidas */}
      <Group justify="center" mb="lg" gap="lg">
        <Badge 
          variant="gradient" 
          gradient={{ from: 'cyan', to: 'blue', deg: 45 }}
          size="lg"
          style={{ padding: '12px 20px', fontSize: '1rem' }}
        >
          👥 Total Participantes: {totalParticipantes}
        </Badge>
        <Badge 
          variant="gradient" 
          gradient={{ from: 'green', to: 'teal', deg: 45 }}
          size="lg"
          style={{ padding: '12px 20px', fontSize: '1rem' }}
        >
          🎪 Total Eventos: {totalEventos}
        </Badge>
        <Badge 
          variant="gradient" 
          gradient={{ from: 'violet', to: 'indigo', deg: 45 }}
          size="lg"
          style={{ padding: '12px 20px', fontSize: '1rem' }}
        >
          🎫 Total Tokens: {totalTokens}
        </Badge>
      </Group>

      <Box 
        style={{ 
          height: 400, 
          width: '100%',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <BarChart
          h={350}
          data={data}
          dataKey="periodo"
          series={[
            { name: "Participantes", color: "cyan.6" },
            { name: "Eventos", color: "green.6" },
            { name: "Tokens", color: "violet.6" }
          ]}
          tickLine="y"
          withBarValueLabel
          withLegend
          legendProps={{
            verticalAlign: 'bottom',
            height: 50,
          }}
          styles={{
            root: {
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
            }
          }}
        />
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
        Dados mostram o crescimento do engajamento durante o evento
      </Text>
    </CustomCard>
  );
};

export default GraficoBarra;
