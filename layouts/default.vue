<template>
    <div id="app">
        <div class="container">
            <el-header class="text-white" height="auto" style="min-width: 355px;">
                <UiGnb />
            </el-header>
            <div class="main-container">
                <div class="pt30 pb30 center-block text-center">
                    <Nuxt/>
                </div>
            </div>
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
