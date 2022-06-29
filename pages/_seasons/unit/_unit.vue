<template>
    <div v-if="!loading"
         class="w100p flex unit_wrap">
        <div class="lnb">
            <ul>
                <li v-for="(unit, u_idx) in units" :key="unit.id" class="unit-list">
                    <div class="unit-box">
                        <div class="unit-img-box">
                            <img src="~/assets/images/favicon.png" :src="unit.iconPath" alt="챔피언 이미지">
                        </div>
                        <div class="unit_name">{{ unit.krName }}</div>
                    </div>
                </li>
            </ul>
        </div>
        <!--        상세 -->
        <div class="main-wrap">
            <div class="unit_top_banner p-relative" :style="`background-image: url(${unitDetail.iconPath})`">
                <div class="p-absoulte w100p over_text">
                    <strong class="text-white">{{ unitDetail.krName }}</strong>
                </div>
            </div>
            <div class="unit_content_wrap">
                <div class="unit_status">
                    <div class="status_box">
                        <div class="status_title">체력</div>
                        <div class="status_value">{{ unitDetail.stats.hp }}</div>
                    </div>
                    <div class="status_box">
                        <div class="status_title">공격력</div>
                        <div class="status_value">{{ unitDetail.stats.attack }}</div>
                    </div>
                </div>
               <div class="unit_ability_info">
                   <img class="unit_img_box" :src="unitDetail.ability.iconPath" width="45" height="45" alt="챔피언 특성 이미지" />
               </div>

            </div>
        </div>

    </div>
    <div v-else>
        <Loading/>
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
    },
    methods: {
        movePage(url) {
            this.$router.push(url);
        },
        async getUnit() {
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
        async getUnitDetail() {
            let params = {};
            if (this.units.length > 0) {
                params.unitId = this.units[0].id.toString();
            }
            let data = await this.$store.dispatch('getUnitDetail', params);
            this.$store.commit('setUnitDetail', data);

            this.loading = false;
        },

    }

}
</script>

<style scoped>

</style>
