<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :items="itemList" @getItemDetail="getItemDetail"/>
        <div class="main-wrap p-relative pb80" v-if="on_load">
            <div class="pa30" style="z-index: 1; background-color: #212121;">
                <div class="text-white large-text" style="display: block;">
                    <strong class="text-white unit_banner_name">{{ itemDetail.krName }}</strong>
                </div>
            <div class="p-relative w100p flex align-center"
                 style="z-index: 1; background-color: #212121;">
                    <div class="unit_top_banner p-relative" :style="`background-image: url(${itemDetail.iconPath})`">
                        <div class="p-absoulte w100p over_text">
                        </div>
                    </div>
                    <div class="text-white desc pa30 word-keep"
                         style="width: calc(100% - 260px); line-height: 1.2" v-html="itemDetail.desc">
                    </div>
                </div>
            </div>
            <div class="unit_content_wrap p-relative pl16 pr16"
                 v-if="has_obj_empty(itemDetail.fromItem1) && has_obj_empty(itemDetail.fromItem2)"
            >
                <div class="text-left pt35">
                    <strong class="fs16">
                        <span class="large-text" style="color: #222222">조합</span>
                    </strong>
                </div>
                <ItemCombi :item1="itemDetail.fromItem1" :item2="itemDetail.fromItem2"/>
            </div>
        </div>
        <div v-if="!on_load">
            <Loading/>
        </div>

    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            on_load: false,
            itemList: [],
        }
    },
    async mounted() {
        if (this.seasonInfo) {
            await this.getItemList();
        }
    },
    computed: {
        seasonInfo() {
            return this.$store.getters['seasonInfo'];
        },
        currentSeason() {
            return this.$store.getters['currentSeason'];
        },
        itemDetail() {
            return this.$store.getters['itemDetail'];
        },
    },
    methods: {
        has_obj_empty(obj) {
            for(let key in obj) {
                return obj[key] ? true : false;
            }
        },
        async getItemList() {
            this.on_load = false;
            let params = {
                seasonId: this.currentSeason,
            }

            let data = [];
            await this.$store.dispatch('getItemList', params).then((res) => {
                res.map((item, index) => {
                    data.push(item);
                });
                this.$store.commit('setItemList', data);
                return res;
            }).catch((err) => {
                console.log(err)
            });

            if (data) {
                this.itemList = data;
            }

            if (this.itemList.length > 0) {
                await this.getItemDetail(this.itemList[9].id);
            }

        },
        async getItemDetail(id) {
            this.on_load = false;
            let params = {
                itemId: id,
            }
            await this.$store.dispatch('getItemDetail', params).then((res) => {
                this.$store.commit('setItemDetail', res);
                return res;
            }).catch((err) => {
                console.log(err)
            });
            this.on_load = true;
        },
    }

}
</script>

<style scoped>

</style>
