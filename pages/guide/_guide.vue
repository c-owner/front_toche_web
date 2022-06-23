<template>
    <div>
        <el-tabs v-model="editableTabsValue" type="border-card" @tab-click="handleTab">
            <el-tab-pane label="챔피언" value="unit">
                <Nuxt/>
            </el-tab-pane>
            <el-tab-pane label="증강체" value="augment">
                <Nuxt/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: "guide",
    data() {
        return {
            editableTabsValue: '0',
        }
    },
    methods: {
        handleTab() {
            switch (this.editableTabsValue) {
                case '0':
                    this.$router.push('/guide/' + this.$route.params.guide + '/unit');
                    break;
                case '1':
                    this.$router.push('/guide/' + this.$route.params.guide + '/augment');
                    break;
                default:
                    break;
            }
        },
    }

}
</script>

<style scoped>

</style>
