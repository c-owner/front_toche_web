/*********************
 * Developer : corner
 * Description : 해당 index 스토어
 ***********************/
import api from '../plugins/api/index.js';

export const state = () => ({

    sessionList: [],

})


export const mutations = {
    setSessionList(state, data) {
        state.sessionList = data;
    }
}


export const getters = {
    sessions: (state) => {
        return state.sessionList || [];
    }
}


export const actions = {

    async get_session_list(store, params) {
        await api.season.getSeasonList(params).then(res => {
            store.commit('setSessionList', res);
        });
    }

}
