import axios from 'axios';
import {api_url} from "~/plugins/api/config";

export const request = {
    get(path, params=null) {
        console.log(params);
        return axios.get(`${api_url + path}`, {params: params})
            .then(res => {
                return res;
            }).catch(({response}) => {
                throw Error(response)
            })
    },
    post(path, data) {
        return axios.post(`${api_url + path}`, data)
            .then(res => {
                return res;
            })
            .catch(({response}) => {
                throw Error(response)
            })
    }
};
