<template>
    <div class="text-white">
        <div class="flex-center pt30 pb30" v-if="selects && selects.length > 0">
            <div class="select_wrap p-relative cursor" @click="deleteSelect(sel)"
                 :style="`background-image: url(${sel.iconPath})`"
                 v-for="(sel, idx) in selects" :key="sel.id">
                <div class="p-absoulte">
                    <el-badge :value="sel.cost" class="item p-absoulte lnb_unit_box" style="left: 3px;"></el-badge>
                </div>
                <div class="p-absoulte unit_name">{{ sel.krName }}</div>
            </div>
        </div>
        <div class="flex-center pt30 pb30" v-else>
            <div class="select_wrap p-relative cursor" @click="deleteASelect(aug)"
                 :style="`background-image: url(${aug.iconPath})`"
                 v-for="(aug, idx) in a_selects" :key="aug.id">
                <div class="p-absoulte unit_name">{{ aug.krName }}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SelectDeck",
    props: ['selects', 'guidUnit', 'a_selects', 'guidAugment'],
    methods: {
        deleteSelect(unit) {
            this.$emit('deleteSelect', unit);
        },
        deleteASelect(augm) {
            this.$emit('deleteASelect', augm);
        },
    },
}
</script>

<style lang="scss" scoped>

.select_wrap {
    border: 1px solid #FFD04b;
    width: 150px;
    height: 150px;
    border-radius: 15px;
    box-shadow: #FFD04b 0px 0px 10px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 0 auto;
}
.unit_name {
    bottom: 15px;
    background-color: #21212150;
    margin: 0 auto;
    width: 100%;
    max-width: 150px;
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;

    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    white-space: nowrap;
}
</style>
