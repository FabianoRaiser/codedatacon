// src/components/Relatorio.tsx
import ListaDados from "../components/List";
import GraficoDonut from "../components/graphs/Donut";
import GraficoBarra from "../components/graphs/Bar";
import { Container, Flex, Grid, Title } from "@mantine/core";
import { GraficoLinhas } from "../components/Lines";
import { IndicadorTexto } from "../components/Text";
import { fetchDashboardStats, type DashboardStats } from "../api/getDashboardStats";
import { useEffect, useState } from "react";

const Relatorio = () => {
    const [dashboardStats, setDashboardStats] = useState<DashboardStats[]>([]);

    useEffect(() => {
        fetchDashboardStats().then(setDashboardStats);
    }, []);

    console.log(dashboardStats.data);

  return (
    <Container>
      <Title order={2}>Relatório</Title>
      <Grid>
        <Grid.Col span={4}>
            <IndicadorTexto label="Total de participantes">{dashboardStats.data.totalAttendees}</IndicadorTexto>
        </Grid.Col>
        <Grid.Col span={4}>
            <IndicadorTexto label="Total de Tokens">{dashboardStats.data.totalTokens}</IndicadorTexto>
        </Grid.Col>
        <Grid.Col span={4}>
            <IndicadorTexto label="Total de sessões">{dashboardStats.data.totalSessions}</IndicadorTexto>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex direction="column" gap={10}>
            <ListaDados label="Top 10 Resolvedores de Puzzel" value={dashboardStats.data.topPuzzleSolvers}/>
            <GraficoDonut />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex direction="column" gap={10}>
            <ListaDados />
            <GraficoDonut />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}>
          <GraficoBarra />  
        </Grid.Col>
        <Grid.Col span={12}>
          <GraficoLinhas />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Relatorio;
