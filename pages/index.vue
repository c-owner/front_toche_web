<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :deckUnit="units" @selectUnits="selectUnits"  />
        <div class="main-wrap p-relative pb80">
            <div class="pa30" style="z-index: 1; background-color: #212121;">
        <!--             선택한 덱 공간 -->
                <DeckSelectDeck :selects="selects" v-if="selects.length > 0" />
                <div v-else>
                    왼쪽에서 챔피언을 선택해보세요!
                </div>
            </div>

<!--             결과 덱 공간-->

        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            on_load: false,
            selects: [],
        }
    },
    async mounted() {
        await this.getUnitList()
    },
    computed: {
        units() {
            return this.$store.getters['units'];
        },
    },
    methods: {
        async getUnitList() {
            let data = [];
            await this.$store.dispatch("getUnitList").then((res) => {
                res.map((unit) => {
                    if (unit.iconPath !== null) {
                       data.push(unit);
                    }

                })
                this.$store.commit('setUnitList', data)
            }).catch((err) => {
                console.log(err)
            });
        },
        async selectUnits(selects) {
            this.on_load = false;
            this.selects = selects;

            let unitIds = selects.toString();
            let params = {
                'unitIds': unitIds
            };
            await this.$store.dispatch('getGuidUnitList', params).then((res) => {
                this.$store.commit('setGuidUnitList', res);
                this.on_load = true;
            }).catch((err)=> {
                console.log(err)
            });
        },
    }

}
</script>

<style scoped>

</style>
