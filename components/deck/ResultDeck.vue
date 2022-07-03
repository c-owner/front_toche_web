<template>
    <div class="deck_result">
        <div class="deck_result_box cursor" @click="movePage('/' + $store.state.currentSeason + '/unit/' + unit.id)"
             v-for="(unit, index) in units" :key="unit.id"
             :style="`background: url(${unit.iconPath}) center / contain`">
            <div class="p-absoulte deck_unit_name">
                {{ unit.krName }}
            </div>
            <el-badge :value="unit.cost" class="item p-absoulte lnb_unit_box" style="right: 3px;"></el-badge>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResultDeck",
    props: ['units'],
    methods: {
        movePage(url) {
            this.$router.push(url);
        }
    },
}
</script>

<style lang="scss" scoped>

.deck_result {
    display: flex;
    margin-top: 30px;
}
.deck_result_box {
    margin: 0 auto;

    width: 90px;
    height: 90px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    border-radius: 15px;
    box-shadow: #FFD04b 0px 0px 10px;
    position: relative;

}
.deck_unit_name {
    width: 90px;
    left: 0;
    font-size: 12px;
    font-family: 'Nanum Gothic', sans-serif;
    color: #fff;

    bottom: 15px;
    background-color: #33333350;
}
</style>
