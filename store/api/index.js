import Vue from 'vue';
import {request} from "~/store/api/request";

Vue.prototype.$api = {
    $season: {
        getSeasonList(params) {
            return request.get('seasons', params).then(({data}) => data);
        },
    },
    $member: {},
}

export default Vue.prototype.$api;
