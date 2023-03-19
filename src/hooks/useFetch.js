import { useEffect, useState, useRef } from "react";

export const useFetch = ({ service, adapter }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await service();
      const data = adapter ? adapter(response) : response;

      setData(data);
    } catch (error) {
      console.log("error", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => fetchData();

  useEffect(() => {
    if (!isMounted.current) return;

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { data, error, loading, refresh };
};
