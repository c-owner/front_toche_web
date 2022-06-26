/*********************
 * Developer : corner
 * Description : 해당 index 스토어
 ***********************/
import api from '../plugins/api/index.js';

export const state = () => ({

    currentSeason: '',
    sessionList: [],

})


export const mutations = {

    setCurrentSeason(state, data) {
        state.currentSeason = data;
    },

    setSessionList(state, data) {
        state.sessionList = data;
    },
}


export const getters = {

    currentSeason: (state) => {
        return state.currentSeason || '';
    },

    sessions: (state) => {
        return state.sessionList || [];
    },
}


export const actions = {


}
