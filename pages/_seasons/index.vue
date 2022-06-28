<template>

</template>

<script>
export default {
    name: "index",
    mounted() {
        this.$router.push('/'+this.$route.params.seasons + '/unit');
    },
}
</script>

<style scoped>

</style>
