<template>
    <div id="app">
        <el-container>
            <el-header class="text-white" height="auto">
                <UiGnb />
            </el-header>
            <el-main>
                <Nuxt/>
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
