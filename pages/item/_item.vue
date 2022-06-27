<template>
    <div>
        <el-tabs type="border-card" v-model="tabIndex">
            <el-tab-pane :label="seasonInfo.title" disabled >

            </el-tab-pane>
            <el-tab-pane label="챔피언 목록">
                <ul>
                    <li v-for="(unit, u_idx) in $store.state.unitList" :key="unit.id" class="unit-list">
                        <div class="unit-box">
                            <div class="unit-img-box">
                                <img src="~/assets/images/favicon.png" :src="unit.iconPath" alt="챔피언 이미지">
                            </div>
                            <div class="unit_name">{{ unit.krName }}</div>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="아이템 목록">

            </el-tab-pane>
            <el-tab-pane label="추천 덱">

            </el-tab-pane>
            <el-tab-pane label="증강">

            </el-tab-pane>
            <el-tab-pane label="특성">

            </el-tab-pane>

        </el-tabs>


    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            tabIndex: '2',
        }
    },
    created() {
    },
    mounted() {
        if (this.seasonInfo) {
            this.getUnit()
        }
    },
    beforeDestroy() {
    },
    computed: {
        seasonInfo() {
            return this.$store.getters['seasonInfo'];
        },
        units() {
            return this.$store.getters['units'];
        }
    },
    methods: {
        getUnit() {
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
                this.$store.dispatch('getUnitList', params).then(res => {
                    this.$store.commit('setUnitList', res);
                });

            } catch (e) {
                console.log(e)
            }
        },

    }

}
</script>

<style scoped>

</style>
