<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :deckUnit="units" @selectUnits="selectUnits" :selects="selects" />
        <div class="main-wrap p-relative pb80">
            <div class="pa30" style="z-index: 1; background-color: #212121;">
        <!--             선택한 덱 공간 -->
                <DeckSelectDeck @deleteSelect="deleteSelect" :selects="selects" v-if="selects.length > 0" />
                <div class="text-white" v-else>
                    왼쪽에서 챔피언을 선택해보세요!
                </div>
            </div>
<!--             결과 덱 공간-->
            <div class="pt50"
                 v-if="guidUnit.hasOwnProperty('units') && selects.length > 0">
                <div class="theme-text-color result_box"
                     style="line-height: 1.3;"
                >
                    <span class="bold" style="color:#222">해당 챔피언이 사용된 횟수 : </span> <span class="bold">{{ guidUnit.allUsedCount}}</span>
                    <br/><span class="bold" style="color:#222"> 덱 사용 수 : </span> <span class="bold">{{ guidUnit.resultCount}}</span>
                </div>
                <div v-if="guidUnit.allUsedCount === 0">
                    <el-empty description="결과가 없습니다!"></el-empty>
                </div>
                <DeckResultDeck :units="guidUnit.units" v-else />
            </div>
            <div v-else>
                <div class="p-absoulte" style="line-height: 1.3; width:100%; margin: 0 auto; top:30%;">
                    <el-empty description=" 덱 조회를 기다리고 있습니다.."></el-empty>
                </div>
            </div>

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
        currentSeason() {
            return this.$store.getters['currentSeason'];
        },
        units() {
            return this.$store.getters['units'];
        },
        guidUnit() {
            return this.$store.getters['guidUnitList'];
        },
    },
    methods: {
        async getUnitList() {
            let data = [];
            let params = {
                'seasonId': this.$store.state.currentSeason
            }
            await this.$store.dispatch("getUnitList", params).then((res) => {
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

            let unitIds = selects.map((unit) => {
                return unit.id;
            });
            let params = {
                'unitIds': unitIds
            };
            if (selects.length > 0 ) {
                await this.$store.dispatch('getGuidUnitList', params).then((res) => {
                    this.$store.commit('setGuidUnitList', res);
                    this.on_load = true;
                }).catch((err)=> {
                    console.log(err)
                });
            }
        },
        async deleteSelect(unit) {
            if (this.selects.includes(unit)) {
                this.selects = this.selects.filter(u => u.id !== unit.id);
            }
            await this.selectUnits(this.selects);
        },
    },
    watch: {
        'currentSeason': function(val) {
            this.getUnitList();
        },
    },

}
</script>

<style scoped>

.result_box {
    width: 50%;
    margin: 0 auto;
    box-shadow: #e5e5e5 0px 0px 10px;
    padding: 50px;
    border-radius: 15px;
}

</style>
