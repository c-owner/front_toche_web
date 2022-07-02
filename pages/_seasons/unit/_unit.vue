<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :units="units" @getUnitDetail="getUnitDetail"/>
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
                <UnitAbility :ability="unitDetail.ability"/>
                <div class="text-left pl16 pr16 pt35">
                    <strong class="fs16">
                        <span class="large-text" style="color: #222222">{{ unitDetail.krName }}</span>(이)가 자주 사용한 아이템
                    </strong>
                    <UnitMostItem :mostItem="mostItem"/>
                </div>
            </div>
        </div>
        <div style="width: 100%;position: absolute;top: 50%;" v-if="loading">
            <Loading/>
        </div>


    </div>
</template>

<script>
export default {
    name: "Unit",
    data() {
        return {
            loading: true,
        }
    },
    created() {
    },
    async mounted() {
        if (this.seasonInfo) {
            await this.getUnit();
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
        movePage(url) {
            this.$router.push(url);
        },
        async getUnit() {
            this.loading = true;
            let seasonId;
            if (this.seasonInfo.hasOwnProperty('id')) {
                seasonId = this.seasonInfo.id;
            } else {
                seasonId = 14;
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
            await this.getUnitDetail();
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
