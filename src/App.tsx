import "@mantine/core/styles.css";
import { Center, MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme/theme";
import "@mantine/charts/styles.css";
import Relatorio from "./pages/Relatorio.tsx";

function App() {
  return (
    <MantineProvider theme={theme}>
      <Center mt={50}>
        <Title order={1}>Codecon Summit 2025 - Os resultados</Title>
      </Center>
      <Relatorio />
    </MantineProvider>
  );
}

export default App;
