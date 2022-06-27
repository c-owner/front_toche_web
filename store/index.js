/*********************
 * Developer : corner
 * Description : 해당 index 스토어
 ***********************/
import axios from "axios";
import {api_url} from "~/plugins/api/config";

export const state = () => ({

    seasonInfo: {
    },
    seasonList: [],
    unitList: [],
})


export const mutations = {
    setSeasonInfo(state, data) {
        state.seasonInfo = data;
    },
    setCurrentSeason(state, data) {
        state.seasonInfo.currentSeason = data;
    },

    setSeasonList(state, data) {
        state.seasonList = data;
    },

    setUnitList(state, data) {
        state.unitList = data;
    }
}


export const getters = {

    seasonInfo: state => state.seasonInfo,

    currentSeason: (state) => {
        return state.seasonInfo.currentSeason || '';
    },

    seasons: (state) => {
        return state.seasonList || [];
    },

    units: (state) => {
        return state.unitList || [];
    }
}


export const actions = {

    async getUnitList(store, params) {
        return await axios.get(api_url + '/units?seasonId=' + params.seasonId).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },
    async getSeasonList(store, params) {
        return await axios.get(api_url + '/seasons').then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },

}
