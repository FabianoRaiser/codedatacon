// src/components/GraficoDonut.tsx
import React from 'react';
import { DonutChart } from '@mantine/charts'; // Supondo que você tenha um componente de gráfico de donut
import { Title } from '@mantine/core';
import { CustomCard } from '../../Card';

const GraficoDonut: React.FC = () => {
  const data = [
    { name: 'A', value: 30, color: 'violet.6' },
    { name: 'B', value: 70, color: 'blue.6' },
  ];

  return (
    <CustomCard>
      <Title order={3}>Gráfico de Donut</Title>
      <DonutChart data={data} />
    </CustomCard>
  );
};

export default GraficoDonut;