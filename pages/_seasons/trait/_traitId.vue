<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :traits="traits" v-if="lnb_load"/>
        <div v-else>
            <Loading/>
        </div>
        <div class="main-wrap p-relative pb80" v-if="on_load">
            <div class="pa30" style="z-index: 1; background-color: #212121;">
                <div class="text-white large-text flex-center">
                    <div class="unit_img_box p-relative trait_box"
                         :style="`background-image: url(${traitDetail.iconPath})`">
                    </div>
                    <strong class="text-white unit_banner_name pl16">{{ traitDetail.krName }}</strong>
                    <el-badge :value="traitDetail.tierTotalCount"></el-badge>
                </div>
                <div class="p-relative w100p"
                     style="z-index: 1; background-color: #212121;">
                    <div class="text-white desc pa30 word-keep"
                         style="line-height: 1.2" v-html="traitDetail.desc">

                    </div>
                </div>
            </div>
            <div class="unit_content_wrap p-relative pl16 pr16">
                <div class="text-left pt35">
                    <strong class="fs16">
                        <span class="large-text" style="color: #222222">이 특성에 해당되는 챔피언</span>
                    </strong>
                </div>
                <TraitUnit :units="traitDetail.units" />
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
        if (!this.traits === false) {
            await this.getTrait();
        }
        if (this.$route.params.traitId) {
            await this.getTraitDetail(this.$route.params.traitId);
        } else {
            await this.$router.push('/' + this.$route.params.seasons + '/trait/' + this.traits[0].id);
        }

    },
    computed: {
        seasonInfo() {
            return this.$store.getters['seasonInfo'];
        },
        traits() {
            return this.$store.getters['traitList'];
        },
        traitDetail() {
            return this.$store.getters['traitDetail'];
        },

    },
    methods: {
        async getTrait() {
            this.lnb_load = false;

            let params = {
                seasonId: this.$route.params.seasons,
            };
            let data = await this.$store.dispatch('getTraitList', params);

            if (data) {
                this.$store.commit('setTraitList', data);
            }

            this.lnb_load = true;
        },
        async getTraitDetail(id) {
            this.on_load = false;

            let params = {
                traitId: id,
            };

            await this.$store.dispatch('getTraitDetail', params).then((res) => {
                this.$store.commit('setTraitDetail', res);
            });

            this.on_load = true;


        },
    }

}
</script>

<style scoped>

</style>
