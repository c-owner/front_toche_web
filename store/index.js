/*********************
 * Developer : corner
 * Description : 해당 index 스토어
 ***********************/
import axios from "axios";
import {api_url} from "~/plugins/api/config";

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

    async getUnitList(store, params) {
        return await axios.get(api_url + '/units', params).then((res) => {

        }).catch((err) => {
            console.log(err)
        });
    },
    async getSeasonList(params) {

        return await axios.get(api_url + '/seasons', params).then((res) => {

        }).catch((err) => {
            console.log(err);
        });
    },

}
