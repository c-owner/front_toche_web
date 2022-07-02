/*********************
 * Developer : corner
 * Description : 해당 index 스토어
 ***********************/
import axios from "axios";
import {api_url} from "~/plugins/api/config";

export const state = () => ({

    currentSeason: '14',
    seasonInfo: {},
    seasonList: [],
    unitList: [],
    unitDetail: {},
    mostItem: [],
})


export const mutations = {
    setSeasonInfo(state, data) {
        state.seasonInfo = data || {};
    },
    setCurrentSeason(state, data) {
        state.currentSeason = data || '';
    },

    setSeasonList(state, data) {
        state.seasonList = data || [];
    },

    setUnitList(state, data) {
        state.unitList = data || [];
    },

    setUnitDetail(state, data) {
        state.unitDetail = data || {};
    },
    setMostItem(state, data) {
        state.mostItem = data || [];
    },
}


export const getters = {

    seasonInfo: state => state.seasonInfo || {},
    currentSeason: state => state.currentSeason || '',
    seasons: state => state.seasonList || [],
    units: state => state.unitList || [],
    unitDetail: state => state.unitDetail || [],
    mostItem: state => state.mostItem || [],
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

    async getUnitDetail(store, params) {
        return await axios.get(api_url + '/units/' + params.unitId).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        })
    },

    async getUnitMostItem(store, params) {
        return await axios.get(api_url + '/units/' + params.unitId + '/mostItems').then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },

    async getItemList(store, params) {
        return await axios.get(api_url + '/items', {params}).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },

}
