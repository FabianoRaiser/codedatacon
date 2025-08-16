// Definindo o tipo de dados que esperamos receber
export interface Attendee {
  id: number;
  name: string;
  email: string;
  // Adicione outras propriedades conforme necessário
}

// Função para buscar os participantes
export const getAttendees = async (): Promise<Attendee[]> => {
  try {
    const response = await fetch('http://localhost:3001/api/attendees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

    // Converter a resposta para JSON
    const data: Attendee[] = await response.json();
    return data;

  } catch (error) {
    console.error('Erro ao buscar participantes:', error);
    throw error;
  }
};

// Função alternativa com tratamento de erro mais específico
export const fetchAttendees = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/attendees');
    
    if (!response.ok) {
      throw new Error(`Falha na requisição: ${response.status}`);
    }
    
    const attendees = await response.json();
    return attendees;
    
  } catch (error) {
    if (error instanceof TypeError) {
      // Erro de rede
      throw new Error('Erro de conexão. Verifique se o servidor está rodando.');
    }
    throw error;
  }
};
