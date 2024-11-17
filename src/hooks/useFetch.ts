import { useState, useEffect } from 'react';
import { getData } from '../services/dataService';

type UseFetchDataResult<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetchData = <T>(endpoint: string): UseFetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData<T>(endpoint); 
        console.log(result)
        setData(result);
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
