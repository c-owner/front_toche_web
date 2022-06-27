<template>
    <div id="app">
        <div class="container">
            <el-header class="text-white" height="auto">
                <UiGnb />
            </el-header>
            <el-main class="main-container">
                <div class="pt30 pb30 center-block text-center">
                    <Nuxt/>
                </div>
            </el-main>
        </div>
    </div>
</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped>

</style>
