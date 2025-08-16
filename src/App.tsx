import "@mantine/core/styles.css";
import { Center, MantineProvider, Title, Box } from "@mantine/core";
import { theme } from "./theme/theme";
import "@mantine/charts/styles.css";
import Relatorio from "./pages/Relatorio.tsx";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Box
        style={{
          minHeight: '100vh',
          background: '#f0f0f0',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
          position: 'relative',
        }}
      >
        {/* Partículas de fundo */}
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <Box
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </Box>

        <Box style={{ position: 'relative', zIndex: 1 }}>
          <Center pt={50} pb={30}>
            <Title 
              order={1} 
              size="3.5rem" 
              style={{
                textAlign: 'center',
                textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                letterSpacing: '-0.02em',
              }}
            >
              CodeDataCon
              <Box component="span" style={{ display: 'block', fontSize: '0.6em', marginTop: '0.5rem' }}>
                Os Resultados
              </Box>
            </Title>
          </Center>
          <Relatorio />
        </Box>
      </Box>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
          }
        `}
      </style>
    </MantineProvider>
  );
}

export default App;
