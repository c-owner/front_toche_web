<template>
    <div>
        <el-tabs v-model="editableTabsValue" type="border-card" @tab-click="handleTab">
            <el-tab-pane label="챔피언" value="unit">
                <GuideUnit />
            </el-tab-pane>
            <el-tab-pane label="증강체" value="augment">
                <GuideAugment />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: "Guide",
    data() {
        return {
            editableTabsValue: '0',
        }
    },
    methods: {
        handleTab($event) {
            let currentSeason = this.$store.state.currentSeason;
            // this.$router.push('/guide/' + currentSeason + '/' + $event.$attrs.value);

        },
    }

}
</script>

<style scoped>

</style>
