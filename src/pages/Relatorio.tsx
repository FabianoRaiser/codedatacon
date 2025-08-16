// src/components/Relatorio.tsx
import ListaDados from "../components/List";
import GraficoDonut from "../components/graphs/Donut";
import GraficoBarra from "../components/graphs/Bar";
import { Container, Grid, Title, Stack } from "@mantine/core";
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
    <Container size="xl">
      <Title order={2} mb="lg">Relatório CodeDataCon</Title>
      
      <Grid>
        {dashboardStats && (
          <>
            {/* Indicadores principais */}
            <Grid.Col span={12}>
              <Grid>
                <Grid.Col span={3}>
                  <IndicadorTexto label="Total de participantes">
                    {dashboardStats.totalAttendees}
                  </IndicadorTexto>
                </Grid.Col>
                <Grid.Col span={3}>
                  <IndicadorTexto label="Total de Tokens">
                    {dashboardStats.totalTokens}
                  </IndicadorTexto>
                </Grid.Col>
                <Grid.Col span={3}>
                  <IndicadorTexto label="Total de Eventos">
                    {dashboardStats.totalEvents}
                  </IndicadorTexto>
                </Grid.Col>
                <Grid.Col span={3}>
                  <IndicadorTexto label="Total de Puzzles">
                    {dashboardStats.totalPuzzles}
                  </IndicadorTexto>
                </Grid.Col>
              </Grid>
            </Grid.Col>

            {/* Gráficos e listas */}
            <Grid.Col span={6}>
              <Stack gap="md">
                <ListaDados
                  label="Top 10 Resolvedores de Puzzle"
                  data={dashboardStats.topPuzzleSolvers}
                />
                <ListaDados
                  label="Top 10 Tokens Resgatados"
                  data={topTokens.map((token: { code: string, claimCount: number }) => ({ 
                    name: `${token.code} - ${token.claimCount} resgates` 
                  }))}
                />
              </Stack>
            </Grid.Col>

            <Grid.Col span={6}>
              <GraficoDonut 
                title="Distribuição de Participantes"
                defaultType="gender"
              />
            </Grid.Col>

            {/* Gráficos adicionais */}
            <Grid.Col span={6}>
              <GraficoDonut 
                title="Segmento das Empresas"
                defaultType="segment"
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <GraficoDonut 
                title="Nível Hierárquico"
                defaultType="level"
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <GraficoDonut 
                title="Distribuição por Estado"
                defaultType="state"
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <GraficoBarra />
            </Grid.Col>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Relatorio;
