// src/components/Relatorio.tsx
import ListaDados from "../components/List";
import GraficoDonut from "../components/graphs/Donut";
// import GraficoBarra from "../components/graphs/Bar";
import { Container, Grid, Title, Stack, Box, Text, Flex } from "@mantine/core";
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
    <Container size="xl" pb={50}>
      <Box mb={40}>
        <Title 
          order={2} 
          size="2.5rem"
          ta="center"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.5rem',
          }}
        >
          Relatório CodeDataCon
        </Title>
        <Text 
          c="dimmed" 
          ta="center" 
          size="lg"
          style={{ fontStyle: 'italic' }}
        >
          Análise completa dos dados do evento
        </Text>
      </Box>
      
      <Grid gutter="xl">
        {dashboardStats && (
          <>
            {/* Indicadores principais */}
            <Grid.Col span={12}>
              <Box mb={30}>
                <Title 
                  order={3} 
                  mb="lg" 
                  ta="center"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                                     Métricas Principais
                </Title>
                <Grid gutter="lg">
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
              </Box>
            </Grid.Col>

            {/* Rankings e Gráficos */}
            <Grid.Col span={12}>
              <Box mb={30}>
                <Title 
                  order={3} 
                  mb="lg" 
                  ta="center"
                  style={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                                     Rankings e Análises
                </Title>
                <Grid gutter="xl">
                  <Grid.Col span={12}>
                    <Flex gap="xl" justify="center">
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
                    </Flex>
                  </Grid.Col>

                  <Grid.Col span={12}>
                                         <GraficoDonut 
                       title="Distribuição de Participantes"
                       defaultType="gender"
                     />
                  </Grid.Col>
                </Grid>
              </Box>
            </Grid.Col>

            {/* Gráficos de Segmentação */}
            <Grid.Col span={12}>
              <Box mb={30}>
                <Box
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '16px 24px',
                    display: 'inline-block',
                    margin: '0 auto 24px auto',
                  }}
                >
                  <Title 
                    order={3} 
                    ta="center"
                    c="white"
                  >
                                         Segmentação dos Dados
                  </Title>
                </Box>
                <Grid gutter="xl">
                  <Grid.Col span={6}>
                    <GraficoDonut 
                      title="🏢 Segmento das Empresas"
                      defaultType="segment"
                    />
                  </Grid.Col>

                  <Grid.Col span={6}>
                    <GraficoDonut 
                      title="👔 Nível Hierárquico"
                      defaultType="level"
                    />
                  </Grid.Col>

                  <Grid.Col span={12}>
                    <GraficoDonut 
                      title="🗺️ Distribuição por Estado"
                      defaultType="state"
                    />
                  </Grid.Col>
                </Grid>
              </Box>
            </Grid.Col>

          </>
        )}
      </Grid>
    </Container>
  );
};

export default Relatorio;
