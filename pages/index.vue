<template>
    <div>
        <el-tabs type="border-card" v-model="tabIndex">
            <el-tab-pane :label="seasonInfo.title" disabled>
            </el-tab-pane>
            <el-tab-pane label="챔피언 목록">
                <Unit />
<!--                <Nuxt />-->
            </el-tab-pane>
            <el-tab-pane label="아이템 목록">
                <Item />
            </el-tab-pane>
            <el-tab-pane label="추천 덱">
                <Deck />
            </el-tab-pane>
            <el-tab-pane label="증강">
                <Augment />
            </el-tab-pane>
            <el-tab-pane label="특성">
                <Trait />
            </el-tab-pane>

        </el-tabs>


    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            tabIndex: '',
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
        movePage(url) {
            this.$router.push(url);
        },
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
