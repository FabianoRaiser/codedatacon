import { LineChart } from "@mantine/charts";
import { CustomCard } from "../Card";
import { Title } from "@mantine/core";

export const GraficoLinhas = () => {

        const data = [
            { month: "Janeiro", Vendas: 30 },
            { month: "Fevereiro", Vendas: 50 },
            { month: "Março", Vendas: 35 },
            { month: "Abril", Vendas: 60 },
        ]

        return (
            <CustomCard>
                <Title order={3}>Gráfico de Linhas</Title>
                <LineChart 
                    h={300} 
                    data={data} 
                    series={[{ name: "Vendas", color: "violet.6" }]} 
                    dataKey="month" 
                    tickLine="y"
                    curveType="linear"
                />
            </CustomCard>
        )
}
