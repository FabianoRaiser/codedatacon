// src/components/GraficoBarra.tsx
import React from "react";
import { BarChart } from "@mantine/charts"; // Supondo que você tenha um componente de gráfico de barra
import { Title } from "@mantine/core";
import { CustomCard } from "../../Card";

const GraficoBarra: React.FC = () => {
  const data = [
    { month: "Janeiro", Vendas: 30 },
    { month: "Fevereiro", Vendas: 50 },
    { month: "Março", Vendas: 35 },
    { month: "Abril", Vendas: 60 },
  ];

  return (
    <CustomCard>
      <Title order={3}>Gráfico de Barras</Title>
      <div style={{ height: 300, width: '100%' }}>
        <BarChart
          h={300}
          data={data}
          dataKey="month"
          series={[{ name: "Vendas", color: "violet.6" }]}
          tickLine="y"
          withBarValueLabel
        />
      </div>
    </CustomCard>
  );
};

export default GraficoBarra;
