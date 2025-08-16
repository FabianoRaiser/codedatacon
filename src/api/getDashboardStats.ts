// Definindo o tipo de dados das estatísticas do dashboard
export interface DashboardStats {
  data: {
    totalAttendees: number;
    totalTokens: number;
    totalSessions: number;
    registrationsByMonth: Array<{
      month: string;
      count: number;
    }>;
    attendeesByCategory: Array<{
      category: string;
      value: number;
      color?: string;
    }>;
  };
  // Adicione outras propriedades conforme necessário
}

// Função para buscar as estatísticas do dashboard
export const getDashboardStats = async (): Promise<DashboardStats> => {
  try {
    const response = await fetch("http://localhost:3001/api/dashboard-stats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

    // Converter a resposta para JSON
    const data: DashboardStats = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar estatísticas do dashboard:", error);
    throw error;
  }
};

// Função alternativa com tratamento de erro mais específico
export const fetchDashboardStats = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/dashboard-stats");

    if (!response.ok) {
      throw new Error(`Falha na requisição: ${response.status}`);
    }

    const stats = await response.json();
    return stats;
  } catch (error) {
    if (error instanceof TypeError) {
      // Erro de rede
      throw new Error("Erro de conexão. Verifique se o servidor está rodando.");
    }
    throw error;
  }
};
