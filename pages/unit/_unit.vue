<template>
    <div>



    </div>
</template>

<script>
export default {
    name: "Unit",
    data() {
        return {
        }
    },
    created() {

    },
    async mounted() {
        await this.getUnit();
    },
    beforeDestroy() {
    },
    methods: {
        getUnit() {
            try {
                let seasonId = this.$store.state.currentSeason;
                let params = {
                    seasonId: seasonId,
                };
                console.log(params)
                this.$api.unit.getUnitList(params).then(res => {
                    this.$store.commit('setUnitList', res);
                });
            } catch (e) {
                console.log(e)
            }
        },
    }

}
</script>

<style scoped>

</style>
