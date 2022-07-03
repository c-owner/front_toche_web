<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :units="units" />
        <!--        상세 -->
        <div class="main-wrap p-relative pb80" v-if="!loading">
            <div class="p-relative w100p flex"
                 style="z-index: 1; background-color: #212121;">
                <div class="unit_top_banner p-relative" :style="`background-image: url(${unitDetail.iconPath})`">
                    <div class="p-absoulte w100p over_text">
                        <strong class="text-white unit_banner_name">{{ unitDetail.krName }}</strong>
                    </div>
                    <div class="p-absoulte cost_wrap">
                        <img class="in_block cost_img" src="~/assets/images/icon/cost_icon.png" alt="cost"/>
                        <div class="in_block cost_value">
                            <span>{{ unitDetail.cost }}</span>
                        </div>
                    </div>
                </div>
                <UnitStats :stats="unitDetail.stats"/>
                <UnitTraits :traits="unitDetail.traits"/>
            </div>
            <div class="unit_content_wrap p-relative">
                <UnitAbility v-if="has_obj_empty(unitDetail.ability)" :ability="unitDetail.ability"/>
                <div class="text-left pl16 pr16 pt35">
                    <strong class="fs16">
                        <span class="large-text" style="color: #222222">{{ unitDetail.krName }}</span>(이)가 자주 사용한 아이템
                    </strong>
                    <UnitMostItem :mostItem="mostItem"/>
                </div>
            </div>
        </div>
        <div v-if="loading">
            <Loading/>
        </div>


    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            loading: true,
        }
    },
    created() {
    },
    async mounted() {
        if (!this.units === false) {
            await this.getUnit();
        }
        if (this.$route.params.unit) {
            await this.getUnitDetail(this.$route.params.unit);
        } else {
            await this.$router.push('/' + this.$route.params.seasons + '/unit/' + this.units[0].id);
        }
    },
    computed: {
        seasonInfo() {
            return this.$store.getters['seasonInfo'];
        },
        units() {
            return this.$store.getters['units'];
        },
        unitDetail() {
            return this.$store.getters['unitDetail']
        },
        mostItem() {
            return this.$store.getters['mostItem']
        },
    },
    methods: {
        has_obj_empty(obj) {
            for(let key in obj) {
                return obj[key] ? true : false;
            }
        },
        movePage(url) {
            this.$router.push(url);
        },
        async getUnit() {
            this.loading = true;
            let seasonId;
            if (this.seasonInfo.hasOwnProperty('id')) {
                seasonId = this.seasonInfo.id;
            } else {
                seasonId = this.$route.params.seasons;
            }

            try {
                let params = {
                    seasonId: seasonId,
                };
                await this.$store.dispatch('getUnitList', params).then(res => {
                    this.$store.commit('setUnitList', res);
                });
            } catch (e) {
                console.log(e)
            }
            // await this.getUnitDetail();
        },
        async getUnitDetail(id) {
            this.loading = true;
            let params = {};
            if (id != null && id != undefined) {
                params.unitId = id;
            } else {
                if (this.units.length > 0) {
                    params.unitId = this.units[0].id.toString();
                }
            }
            let data = await this.$store.dispatch('getUnitDetail', params);
            await this.$store.commit('setUnitDetail', data);

            await this.getUnitMostItem(params);

        },
        async getUnitMostItem(params) {
            let data = await this.$store.dispatch('getUnitMostItem', params);
            await this.$store.commit('setMostItem', data);
            this.loading = false;
        },

    }

}
</script>

<style scoped>

</style>
