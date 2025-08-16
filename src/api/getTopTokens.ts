export const getTopTokens = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/analytics/top-tokens", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log(response);
  
      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
      }
  
      // Converter a resposta para JSON
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao buscar estatísticas do dashboard:", error);
      throw error;
    }
  };
  