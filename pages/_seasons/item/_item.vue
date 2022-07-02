<template>
    <div class="w100p flex unit_wrap">
        <UiLnb :items="itemList" @getItemDetail="getItemDetail" />
        <div class="mt50" v-if="on_load">

            <div style="border-bottom: 1px solid #e5e5e5" class="pb30">
                <strong class="fs16">
                </strong>
            </div>


        </div>
        <div v-else>
            <Loading/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            on_load: false,
            itemList: [],
        }
    },
    mounted() {
        if (this.currentSeason != null && this.currentSeason !== '') {
            this.getItemList();
        }
    },
    computed: {
        currentSeason() {
            return this.$store.getters.currentSeason;
        },
        itemDetail() {
            return this.$store.getters.itemDetail;
        },
    },
    methods: {
        getItemList() {
            this.on_load = false;
            let params = {
                seasonId: this.currentSeason,
            }

            let data = [];
            this.$store.dispatch('getItemList', params).then((res) => {
                res.map((item, index) => {
                    data.push(item);
                });
                this.$store.commit('setItemList', data);
                return res;
            }).catch((err) => {
                console.log(err)
            });

            if (data) {
                this.itemList = data;
            }

            if (this.itemList.length > 0) {
                this.getItemDetail(this.itemList[0].id);
            }

            this.on_load = true;

        },
        async getItemDetail(id) {
            let params = {
                itemId: id,
            }
            console.log(params)
            await this.$store.dispatch('getItemDetail', params).then((res) => {
                this.$store.commit('setItemDetail', res);

                console.log(res)
                return res;
            }).catch((err) => {
                console.log(err)
            });
        },
    }

}
</script>

<style scoped>

</style>
