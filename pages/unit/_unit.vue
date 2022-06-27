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
                let seasonId = this.$store.state.seasonInfo.id;
                let params = {
                    seasonId: seasonId,
                };
                this.$store.dispatch('getUnitList', params).then(res => {
                    console.log(res)
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
