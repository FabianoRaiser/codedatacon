import { Card, Box } from "@mantine/core"

export const CustomCard = ({children, color = "violet"}: {children: React.ReactNode, color?: string}) => {
    return (
        <Box
            style={{
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
        >
            <Card 
                shadow="xl" 
                radius="xl" 
                p="lg"
                style={{
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Conteúdo */}
                <Box style={{ position: 'relative', zIndex: 1 }}>
                    {children}
                </Box>
            </Card>
        </Box>
    )
}