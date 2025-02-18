import axios, {AxiosRequestConfig} from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

// export function getTokenHeader(): Record<string, string> {
//     return {Authorization: `Bearer`};
// }

const config: AxiosRequestConfig = {
    baseURL: baseUrl,
    withCredentials: true
};

export const axiosInstance = axios.create(config);