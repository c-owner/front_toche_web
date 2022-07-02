<template>
    <div class="pt35">
        <div class="mb30 most_list">
            <div class="mostitem_icon flex align-center p-relative">
                <div class="unit_img_box p-relative" :style="`background: url(${item1.iconPath}) center / contain`">
                </div>
                <div class="in_block pl14 bold">{{ item1.krName }}</div>
            </div>
            <el-popover
                class="p-relative w100p h100p"
                style="top: 10px;"
                placement="bottom"
                :width="'100%'"
                trigger="manual"
                v-model="visible">
                <div v-html="item1.desc"></div>
            </el-popover>
        </div>

        <div class="mb30 most_list">
            <div class="mostitem_icon flex align-center p-relative">
                <div class="unit_img_box p-relative" :style="`background: url(${item2.iconPath}) center / contain`">
                </div>
                <div class="in_block pl14 bold">{{ item2.krName }}</div>
            </div>
            <el-popover
                class="p-relative w100p h100p"
                style="top: 10px;"
                placement="bottom"
                :width="'100%'"
                trigger="manual"
                v-model="visible">
                <div v-html="item2.desc"></div>
            </el-popover>
        </div>

    </div>
</template>

<script>
export default {
    name: "Combi",
    props: ['item1', 'item2'],
    data() {
        return {
            visible: true,
        }
    }
}
</script>

<style scoped>

</style>
