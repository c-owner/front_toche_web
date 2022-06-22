import axios from 'axios'
import {apiURL} from "~/store/api/config";

export const request = {
    get(path, params=null) {
        return axios.get(`${apiURL + path}`, {params: params})
            .then(res => {
                /*if(res.data.ResultCode === RESULTCODE.INVALIDE_PARAMETER) {
                    alert("문제가 발생했습니다. 다시 시도해주세요.");
                    return res;
                }*/
                return res;
            }).catch(({response}) => {
                throw Error(response)
            })
    },
    post(path, data) {
        return axios.post(`${apiURL + path}`, data)
            .then(res => {
                return res;
            })
            .catch(({response}) => {
                // router.push('/')
                throw Error(response)
            })
    }
};
