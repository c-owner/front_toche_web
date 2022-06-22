import Vue from 'vue';
import {request} from "~/store/api/request";


export default (context, inject, app) => {

    const api = {
        season: {
            getSeasonList(params) {
                return request.get('seasons', params).then(({data}) => data);
            },
        },
        member: {},
    }
    inject('api', api);
}
