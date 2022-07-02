<template>
    <div class="load_compo">
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
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        },
    }

}
</script>

<style lang="scss" scoped>

.load_compo {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
}

</style>
