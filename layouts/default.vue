<template>
    <div id="app">
        <el-container>
            <el-header class="text-white" height="auto">
                <UiGnb />
            </el-header>
            <el-main>
                <div class="pt30 pb30 center-block text-center">
                    <Nuxt/>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped>

</style>
