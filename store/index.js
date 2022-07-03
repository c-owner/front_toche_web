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
    itemList: [],
    itemDetail: {},
    mostUnit: [],

    traitList: [],
    traitDetail: {},
    augmentList: [],
    augmentDetail: {},

    guidUnitList: [],
    guidAugmentList: [],
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
    setItemList(state, data) {
        state.itemList = data || [];
    },
    setItemDetail(state, data) {
        state.itemDetail = data || {};
    },
    setMostUnit(state, data) {
        state.mostUnit = data || [];
    },

    setTraitList(state, data) {
        state.traitList = data || [];
    },
    setTraitDetail(state, data) {
        state.traitDetail = data || {};
    },

    setAugmentList(state, data) {
        state.augmentList = data || [];
    },
    setAugmentDetail(state, data) {
        state.augmentDetail = data || {};
    },

    setGuidUnitList(state, data) {
        state.guidUnitList = data || [];
    },
    setGuidAugmentList(state, data) {
        state.guidAugmentList = data || [];
    }
}


export const getters = {

    seasonInfo: state => state.seasonInfo || {},
    currentSeason: state => state.currentSeason || '',
    seasons: state => state.seasonList || [],
    units: state => state.unitList || [],
    unitDetail: state => state.unitDetail || [],
    mostItem: state => state.mostItem || [],
    itemList: state => state.itemList || [],
    itemDetail: state => state.itemDetail || {},
    mostUnit: state => state.mostUnit || [],
    traitList: state => state.traitList || [],
    traitDetail: state => state.traitDetail || {},
    augmentList: state => state.augmentList || [],
    augmentDetail: state => state.augmentDetail || {},
    guidUnitList: state => state.guidUnitList || [],
    guidAugmentList: state => state.guidAugmentList || [],
}



export const actions = {

    async getUnitList(store, params) {
        let paramPath = '';
        if (params) {
            paramPath = `/units?seasonId=${params.seasonId}`;
        } else {
            paramPath = '/units';
        }
        return await axios.get(api_url + paramPath).then(({data}) => {
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

    async getItemDetail(store, params) {
        return await axios.get(api_url + '/items/' + params.itemId).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },

    async getItemMostUnit(store, params) {
        return await axios.get(api_url + '/items/' + params.itemId + '/mostUnits?seasonId=' + params.seasonId).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err);
        });
    },

    async getTraitList(store, params) {
        return await axios.get(api_url + '/traits', {params}).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },
    async getTraitDetail(store, params) {
        return await axios.get(api_url + '/traits/' + params.traitId).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },
    async getAugmentList(store, params) {
        return await axios.get(api_url + '/augments', {params}).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },
    async getAugmentDetail(store, params) {
        return await axios.get(api_url + '/augments/' + params.augmentId).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },
    async getGuidUnitList(store, params) {
        return await axios.get(api_url + '/guid/units?unitIds=' + params.unitIds).then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    },
    async getGuidAugmentList(store, params) {
        return await axios.get(api_url + '/guid/augment?augmentIds='+ params.augmentIds + '&seasonId=' + params.seasonId)
            .then(({data}) => {
            return data;
        }).catch((err) => {
            console.log(err)
        })
    }

}
