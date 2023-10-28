import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface fetchedDatas<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint : string, requestConfig? : AxiosRequestConfig, deps? : any) => {
  const [Datas, setDatas] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchedDatas<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setDatas(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps? [...deps] : []);

  return { Datas, errors, loading };
};

export default useData;
