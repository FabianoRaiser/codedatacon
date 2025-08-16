export interface DonutData {
  name: string;
  value: number;
  color: string;
}

export interface Attendee {
  id: number;
  uuid: string;
  gender: string;
  city: string;
  state: string;
  companySegment: string;
  position: string;
  positionLevel: string;
}

// Função para buscar dados de participantes
export const getAttendees = async (): Promise<Attendee[]> => {
  try {
    const response = await fetch('http://localhost:3001/api/attendees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

    const data: Attendee[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar participantes:', error);
    throw error;
  }
};

// Função para gerar dados de donut por gênero
export const getGenderDonutData = async (): Promise<DonutData[]> => {
  try {
    const attendees = await getAttendees();
    
    const genderCount = attendees.reduce((acc, attendee) => {
      const gender = attendee.gender || 'Não informado';
      acc[gender] = (acc[gender] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const colors = {
      'M': 'blue.6',
      'F': 'pink.6',
      'O': 'grape.6',
      'Não informado': 'gray.6'
    };

    return Object.entries(genderCount).map(([gender, count]) => ({
      name: gender === 'M' ? 'Masculino' : gender === 'F' ? 'Feminino' : gender === 'O' ? 'Outro' : 'Não informado',
      value: count,
      color: colors[gender as keyof typeof colors] || 'gray.6'
    }));
  } catch (error) {
    console.error('Erro ao gerar dados de gênero:', error);
    return [];
  }
};

// Função para gerar dados de donut por segmento da empresa
export const getCompanySegmentDonutData = async (): Promise<DonutData[]> => {
  try {
    const attendees = await getAttendees();
    
    const segmentCount = attendees.reduce((acc, attendee) => {
      const segment = attendee.companySegment || 'Não informado';
      acc[segment] = (acc[segment] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const colors = [
      'blue.6', 'green.6', 'yellow.6', 'red.6', 'purple.6', 
      'cyan.6', 'orange.6', 'lime.6', 'pink.6', 'grape.6'
    ];

    return Object.entries(segmentCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 8) // Top 8 segmentos
      .map(([segment, count], index) => ({
        name: segment,
        value: count,
        color: colors[index % colors.length]
      }));
  } catch (error) {
    console.error('Erro ao gerar dados de segmento:', error);
    return [];
  }
};

// Função para gerar dados de donut por nível hierárquico
export const getPositionLevelDonutData = async (): Promise<DonutData[]> => {
  try {
    const attendees = await getAttendees();
    
    const levelCount = attendees.reduce((acc, attendee) => {
      const level = attendee.positionLevel || 'Não informado';
      acc[level] = (acc[level] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const colors = {
      'Estagiário': 'blue.3',
      'Junior': 'blue.5',
      'Pleno': 'blue.7',
      'Sênior': 'blue.9',
      'Principal': 'indigo.6',
      'Staff': 'violet.6',
      'Executivo': 'grape.6',
      'Gerente': 'pink.6',
      'Não informado': 'gray.6'
    };

    return Object.entries(levelCount)
      .sort(([,a], [,b]) => b - a)
      .map(([level, count]) => ({
        name: level,
        value: count,
        color: colors[level as keyof typeof colors] || 'gray.6'
      }));
  } catch (error) {
    console.error('Erro ao gerar dados de nível:', error);
    return [];
  }
};

// Função para gerar dados de donut por estado
export const getStateDonutData = async (): Promise<DonutData[]> => {
  try {
    const attendees = await getAttendees();
    
    const stateCount = attendees.reduce((acc, attendee) => {
      const state = attendee.state || 'Não informado';
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const colors = [
      'blue.6', 'green.6', 'yellow.6', 'red.6', 'purple.6', 
      'cyan.6', 'orange.6', 'lime.6', 'pink.6', 'grape.6',
      'teal.6', 'indigo.6', 'violet.6', 'emerald.6', 'amber.6'
    ];

    return Object.entries(stateCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10) // Top 10 estados
      .map(([state, count], index) => ({
        name: state,
        value: count,
        color: colors[index % colors.length]
      }));
  } catch (error) {
    console.error('Erro ao gerar dados de estado:', error);
    return [];
  }
};
