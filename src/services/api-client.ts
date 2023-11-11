import axios, { AxiosRequestConfig } from "axios";
export interface fetchedDatas<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9df571b6630f416da43888e2ccbaa5da",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchedDatas<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
  };
}

export default APIClient;
