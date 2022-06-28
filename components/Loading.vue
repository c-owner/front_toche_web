<template>
    <div style="height: 30vh">
        <div v-loading="loading"></div>
    </div>
</template>

<script>
export default {
    name: "Loading",
    data() {
        return {
            loading: true,
        }
    },
    created() {
    },
    mounted() {

    },
    beforeDestroy() {
    },
    methods: {
    }

}
</script>

<style scoped>

</style>
