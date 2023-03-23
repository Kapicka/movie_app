import { useEffect, useState } from "react";
import axios from "axios";

function useFetch<T>(url: string) {
  const [error, setError] = useState<string | undefined>();
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setData(data))
      .finally(() => setLoading(false))
      .catch((err) => {
        setError(err);
      });
  }, []);

  return [data, loading, error];
}

export default useFetch;
