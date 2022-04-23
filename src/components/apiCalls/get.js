import axios from "axios";
import { baseURL } from "../helper/config";

export const GET = (url) => {
    return axios.get(`${baseURL}${url}`)
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
    })
}