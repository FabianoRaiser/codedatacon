import { Card } from "@mantine/core"

export const CustomCard = ({children}: {children: React.ReactNode}) => {
    return (
        <Card withBorder shadow="sm" radius="md" p="md">
            {children}
        </Card>
    )
}