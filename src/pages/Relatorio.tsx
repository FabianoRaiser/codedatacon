// src/components/Relatorio.tsx
import ListaDados from "../components/List";
import GraficoDonut from "../components/graphs/Donut";
import GraficoBarra from "../components/graphs/Bar";
import { Container, Grid, Title } from "@mantine/core";
// import { GraficoLinhas } from "../components/Lines";
import { IndicadorTexto } from "../components/Text";
import {
  fetchDashboardStats,
  type DashboardStats,
} from "../api/getDashboardStats";
import { useEffect, useState } from "react";
import { getTopTokens } from "../api/getTopTokens";

const Relatorio = () => {
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>();
  const [topTokens, setTopTokens] = useState([]);

  useEffect(() => {
    fetchDashboardStats().then(setDashboardStats);
    getTopTokens().then(setTopTokens);
  }, []);

  console.log(dashboardStats || 'Não há dados');

  return (
    <Container>
      <Title order={2}>Relatório</Title>
      <Grid>
        {dashboardStats && (
          <>
            <Grid.Col span={4}>
              <IndicadorTexto label="Total de participantes">
                {dashboardStats.totalAttendees}
              </IndicadorTexto>
            </Grid.Col>
            <Grid.Col span={4}>
              <IndicadorTexto label="Total de Tokens">
                {dashboardStats.totalTokens}
              </IndicadorTexto >
            </Grid.Col>
            <Grid.Col span={4}>
              <IndicadorTexto label="Total de sessões">
                {dashboardStats.totalAttendees}
              </IndicadorTexto>
            </Grid.Col>
            <Grid.Col span={4}>
                <ListaDados
                  label="Top 10 Resolvedores de Puzzel"
                  data={dashboardStats.topPuzzleSolvers}
                />
            </Grid.Col>
            <Grid.Col span={4}>
                <ListaDados
                  label="Top 10 Resgatadores de Tokens"
                  data={dashboardStats.topPuzzleSolvers}
                />
            </Grid.Col>
            <Grid.Col span={4}>
              <ListaDados
                  label="Top 10 Tokens Resgatados"
                  data={topTokens.map((token: { code: string, claimCount: number }) => ({ name: `${token.code} - ${token.claimCount}` }))}
                />
            </Grid.Col>
            <Grid.Col span={4}>
              <GraficoBarra />
            </Grid.Col>
            <Grid.Col span={12}>
              {/* <GraficoLinhas data={dashboardStats} label="Registros por mês" /> */}
            </Grid.Col>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Relatorio;
