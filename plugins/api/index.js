import {request} from "~/plugins/api/request";

export default (context, inject, app) => {

    const api = {
        season: {
            getSeasonList(params) {
                return request.get('/seasons', params).then(({data}) => data);
            },
        },
        unit: {
            getUnitList(params) {
                return request.get('/units', params).then(({data}) => data);
            }
        },
    }
    inject('api', api);
}
