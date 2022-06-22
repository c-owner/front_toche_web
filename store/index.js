import {apiURL} from "~/store/api/config";

/*********************
 * SGR Developer : corner
 * Description : 해당 index 스토어
 ***********************/

export const state = () => ({
    seasonList: [],
})


export const mutations = {
    setSeasonList(state, data) {
        state.seasonList = data;
    },

}


export const getters = {
    getSeasonList(state) {
        return state.seasonList;
    },
}


export const actions = {

    async getSeasonList(store, params) {

        try {
            return await this.$api.season.getSeasonList(params).then(({res}) => {
                store.commit('setSeasonList', res.data);
                console.log(res);
            });
        } catch (e) {
            console.log(e);
        }

    },


}
