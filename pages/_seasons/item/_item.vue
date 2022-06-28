<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: "Item",
    // todo:: tab content layout형식으로 ..
    data() {
        return {
            tabIndex: '2',
        }
    },
    created() {
    },
    mounted() {
        if (this.seasonInfo) {
            this.getUnit()
        }
    },
    beforeDestroy() {
    },
    computed: {
        seasonInfo() {
            return this.$store.getters['seasonInfo'];
        },
        units() {
            return this.$store.getters['units'];
        }
    },
    methods: {
        getUnit() {
            let seasonId;
            if (this.seasonInfo.hasOwnProperty('id')) {
                seasonId = this.seasonInfo.id;
            } else {
                seasonId = 14;
            }
            try {
                let params = {
                    seasonId: seasonId,
                };
                this.$store.dispatch('getUnitList', params).then(res => {
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
