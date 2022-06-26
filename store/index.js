/*********************
 * Developer : corner
 * Description : 해당 index 스토어
 ***********************/
import api from '../plugins/api/index.js';

export const state = () => ({

    currentSeason: 7,
    sessionList: [],
    unitList: [],
})


export const mutations = {

    setCurrentSeason(state, data) {
        state.currentSeason = data;
    },

    setSessionList(state, data) {
        state.sessionList = data;
    },

    setUnitList(state, data) {
        state.unitList = data;
    }
}


export const getters = {

    currentSeason: (state) => {
        return state.currentSeason || '';
    },

    sessions: (state) => {
        return state.sessionList || [];
    },

    units: (state) => {
        return state.unitList || [];
    }
}


export const actions = {


}
