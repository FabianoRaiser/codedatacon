import { Text, Title, Group, Box } from "@mantine/core"
import { CustomCard } from "../Card"

const getIcon = (label: string) => {
    const icons: { [key: string]: string } = {
        "Total de participantes": "👥",
        "Total de Tokens": "🎫",
        "Total de Eventos": "🎪",
        "Total de Puzzles": "🧩"
    };
    return icons[label] || "📊";
};

const getColor = (label: string) => {
    const colors: { [key: string]: string } = {
        "Total de participantes": "cyan",
        "Total de Tokens": "violet",
        "Total de Eventos": "green",
        "Total de Puzzles": "orange"
    };
    return colors[label] || "gray";
};

export const IndicadorTexto = ({children, label}: {children: React.ReactNode, label: string}) => {
    const icon = getIcon(label);
    const color = getColor(label);
    
    return (
        <CustomCard color={color}>
            <Group gap="md" align="center">
                <Box
                    style={{
                        fontSize: '2rem',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    }}
                >
                    {icon}
                </Box>
                <Box style={{ flex: 1 }}>
                    <Title 
                        order={4} 
                        size="sm" 
                        c="dimmed" 
                        style={{ 
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontWeight: 600,
                        }}
                    >
                        {label}
                    </Title>
                    <Text 
                        size="2rem" 
                        fw={700}
                        style={{
                            background: `linear-gradient(135deg, var(--mantine-color-${color}-6), var(--mantine-color-${color}-4))`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: 1,
                        }}
                    >
                        {children}
                    </Text>
                </Box>
            </Group>
        </CustomCard>
    )
}