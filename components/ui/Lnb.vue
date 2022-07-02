<template>
    <div class="lnb">
        <ul>
            <li v-for="(unit, u_idx) in units" :key="unit.id" class="unit-list">
                <div class="unit-box" @click="getUnitDetail(unit.id)">
                    <div class="unit_img_box p-relative" :style="`background: url(${unit.iconPath}) center / contain`">
                        <el-badge :value="unit.cost" class="item p-absoulte lnb_unit_box" style="left: 3px;"></el-badge>
                    </div>
                    <div class="unit_name">{{ unit.krName }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Lnb",
    props: ['units'],
    methods: {
        getUnitDetail(id) {
            this.$emit('getUnitDetail', id);
        }
    },
}
</script>

<style scoped>

</style>
