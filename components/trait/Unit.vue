<template>
    <div class="pt35">
        <div v-for="(unit, i_idx) in units" :key="unit.id" class="mb30 most_list">
            <div class="mostitem_icon flex align-center p-relative cursor"
                 @click="movePage('/' + $route.params.seasons + '/unit/' + unit.id)">
                <div class="unit_img_box p-relative" :style="`background: url(${unit.iconPath}) center / contain`">
                </div>
                <div class="in_block pl14 bold">{{ unit.krName }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Unit",
    props: ['units'],
    data() {
        return {
            visible: true,
        }
    },
    methods: {
        movePage(url) {
            this.$router.push(url);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
