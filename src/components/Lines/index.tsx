import { LineChart } from "@mantine/charts";
import { CustomCard } from "../Card";
import { Title } from "@mantine/core";

export const GraficoLinhas = (data: { period: string, value: number }[], label: string) => {

        return (
            <CustomCard>
                <Title order={3}>{label}</Title>
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
