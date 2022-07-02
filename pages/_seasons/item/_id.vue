<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :items="itemList" />
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
                <div class="text-left pt35">
                    <strong class="fs16">
                        <span class="large-text" style="color: #222222">이 아이템을 사용한 TOP5 챔피언</span>
                    </strong>
                </div>
                <ItemMostUnit :mostUnit="mostUnit"/>
            </div>
        </div>
        <div v-if="!on_load">
            <Loading/>
        </div>

    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            on_load: false,
        }
    },
    async mounted() {
        if (!this.itemList === false) {
            await this.getItemList();
        }
        if (this.$route.params.id) {
            await this.getItemDetail(this.$route.params.id);
        } else {
            await this.$router.push('/' + this.$route.params.seasons + '/item/' + this.itemList[0].id);
        }

    },
    computed: {
        itemList() {
            return this.$store.getters['itemList'];
        },
        seasonInfo() {
            return this.$store.getters['seasonInfo'];
        },
        currentSeason() {
            return this.$store.getters['currentSeason'];
        },
        itemDetail() {
            return this.$store.getters['itemDetail'];
        },
        mostUnit() {
            return this.$store.getters['mostUnit'];
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
                seasonId: this.$route.params.seasons,
            }

            let data = [];
            await this.$store.dispatch('getItemList', params).then((res) => {
                res.map((item, index) => {
                    data.push(item);
                });
                return res;
            }).catch((err) => {
                console.log(err)
            });

            if (data) {
                this.$store.commit('setItemList', data);
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

            await this.getItemMostUnit();

            this.on_load = true;
        },
        async getItemMostUnit() {
            let params = {
                'seasonId' : this.$route.params.seasons,
                'itemId' : this.$route.params.id,
            };
            await this.$store.dispatch('getItemMostUnit', params).then((res) => {
                this.$store.commit('setMostUnit', res);
                return res;
            }).catch((err) => {
                console.log(err)
            });
        },
        movePage(url) {
            this.$router.push(url);
        },
    }

}
</script>

<style scoped>

</style>
