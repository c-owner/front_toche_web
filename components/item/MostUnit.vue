<template>
    <div class="pt35">
        <div v-for="(item, i_idx) in mostUnit" :key="item.id" class="mb30 most_list">
            <div class="mostitem_icon flex align-center p-relative cursor"
                 @click="movePage('/' + $route.params.seasons + '/unit/' + item.id)">
                <div class="unit_img_box p-relative" :style="`background: url(${item.iconPath}) center / contain`"
                     style="width: 60px; height: 60px;"
                >
                    <el-badge :value="item.itemUsedCount" class="item p-absoulte"></el-badge>
                </div>
                <div class="in_block pl14 bold">{{ item.krName }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MostUnit",
    props: ['mostUnit'],
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
