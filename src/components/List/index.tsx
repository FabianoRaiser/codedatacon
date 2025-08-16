// src/components/ListaDados.tsx
import { List, Title, Group, Text, Box, Badge } from "@mantine/core";
import { CustomCard } from "../Card";

const getRankIcon = (index: number) => {
  const icons = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
  return icons[index] || `${index + 1}`;
};

const getRankColor = (index: number) => {
  const colors = ["gold", "silver", "bronze", "violet", "cyan", "pink", "green", "orange", "grape", "indigo"];
  return colors[index] || "gray";
};

const ListaDados = ({label, data}: {label: string, data: { name: string}[]}) => {
  return (
    <CustomCard color="violet">
      <Title 
        order={3} 
        mb="lg"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {label}
      </Title>
      <List
        spacing="md"
        size="lg"
        center
        icon={
          <Box style={{ fontSize: '1.2rem' }}>
            🏆
          </Box>
        }
      >
        {data.map((item: { name: string }, index: number) => (
          <List.Item 
            key={index}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
              borderRadius: '12px',
              padding: '12px 16px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(5px)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)';
            }}
          >
            <Group gap="md" align="center">
              <Badge 
                size="lg" 
                variant="gradient"
                gradient={{ from: getRankColor(index), to: getRankColor(index), deg: 45 }}
                style={{ 
                  fontSize: '1.2rem',
                  padding: '8px 12px',
                  borderRadius: '8px',
                }}
              >
                {getRankIcon(index)}
              </Badge>
              <Text 
                size="md" 
                fw={500}
                style={{ 
                  flex: 1,
                  color: 'var(--mantine-color-dark-7)',
                }}
              >
                {item.name}
              </Text>
            </Group>
          </List.Item>
        ))}
      </List>
    </CustomCard>
  );
};

export default ListaDados;
