import axios from "axios";
import {API_URL} from "~utils/config";


export const useApiClient = () => {
    return axios.create({
        baseURL: API_URL,
        withCredentials: true,
    })
}