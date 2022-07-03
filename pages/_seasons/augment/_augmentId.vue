<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :augments="augments" v-if="lnb_load"/>
        <div v-else>
            <Loading/>
        </div>
        <div class="main-wrap p-relative pb80" v-if="on_load">
            <div class="pa30" style="z-index: 1; background-color: #212121;">

            </div>
        </div>
        <div v-else>
            <Loading/>
        </div>

    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            on_load: false,
            lnb_load: false,
        }
    },
    async mounted() {
        if (!this.augments === false) {
            await this.getAugment();
        }
        if (this.$route.params.augmentId) {
            await this.getAugmentDetail(this.$route.params.augmentId);
        } else {
            await this.$router.push('/' + this.$route.params.seasons + '/augment/' + this.augments[0].id);
        }
    },
    computed: {
        seasonInfo() {
            return this.$store.getters['seasonInfo'];
        },
        augments() {
            return this.$store.getters['augmentList'];
        },
        augmentDetail() {
            return this.$store.getters['augmentDetail'];
        },
    },
    methods: {
        async getAugment() {
            this.lnb_load = false;
            let params = {
                seasonId: this.$route.params.seasons,
            };
            await this.$store.dispatch('getAugmentList', params).then((res) => {
                this.$store.commit('setAugmentList', res);
                this.lnb_load = true;
            });
        },
        async getAugmentDetail(id) {
            this.on_load = false;
            let params = {
                augmentId: id,
            };
            await this.$store.dispatch('getAugmentDetail', params).then((res) => {
                this.$store.commit('setAugmentDetail', res);
                this.on_load = true;
            });
        },

    }

}
</script>

<style scoped>

</style>
