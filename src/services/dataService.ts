import api from './api';

export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    console.log(endpoint)
    const response = await api.get<T>(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async <T>(endpoint: string, data: T): Promise<T> => {
  try {
    const response = await api.post<T>(endpoint, data); 
    return response.data;
  } catch (error) {
    throw error;
  }
};
