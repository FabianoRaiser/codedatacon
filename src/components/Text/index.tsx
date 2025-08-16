import { Text, Title } from "@mantine/core"
import { CustomCard } from "../Card"

export const IndicadorTexto = ({children, label}: {children: React.ReactNode, label: string}) => {
    return (
        <CustomCard>
            <Title order={3}>{label}</Title>
            <Text>{children}</Text>
        </CustomCard>
    )
}