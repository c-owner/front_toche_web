<template>
    <div class="header flex align-center pl30 pr30" style="justify-content: space-evenly">
        <div class="text-left cursor logo_box mr30" @click="$router.push('/')">
            <img src="@/assets/images/toche-Logo-512.png" alt="logo" width="80px"/>
            <strong class="text-white">TFT 초심자 가이드</strong>
        </div>
        <div>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#212121"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="guide">덱 가이드</el-menu-item>

                <el-menu-item index="unit">챔피언</el-menu-item>
                <el-menu-item index="item">아이템</el-menu-item>
                <el-menu-item index="deck">추천 덱</el-menu-item>
                <el-menu-item index="augment">증강체</el-menu-item>
                <el-menu-item index="trait">특성</el-menu-item>
            </el-menu>
        </div>
        <el-select class="mr30" tyle="primary" @input="selectSeason"
                   :placeholder="'시즌' + currentSeason"
                   v-model="currentSeason">
            <el-option v-for="(season, s_idx) in seasons" :value="season.id.toString()"
                              :key="season.id" :label="season.title">
            </el-option>
        </el-select>
        <!--        <div class="none_item"></div>-->
    </div>
</template>

<script>
export default {
    name: "Gnb",
    data() {
        return {
            currentSeason: '14',
            activeIndex: '1',
            augment: false,
            trait: false,
        };
    },
    async mounted() {
        try {
            await this.$store.dispatch('getSeasonList').then(res => {
                res.forEach((item, index) => {
                    if (item.num) {
                        item.title = "시즌" + item.num;
                    }
                    if (res[index + 1]) {
                        if (item.name.indexOf('Tutorial') > 0) {
                            item.title = "시즌" + item.num + " 설명서";
                            item.num += 0.5;
                        } else {
                            // 겹치면 0.5 시즌
                            if (res[index + 1].num === item.num) {
                                item.num += 0.5;
                            }
                        }
                    }
                    if (item.name.indexOf('Stage') > 0) {
                        item.title = "시즌" + item.num + "";
                    }
                });
                this.$store.commit('setSeasonList', res);

                let seasonInfo = res.filter(res => {
                    if (res.num === Number(this.currentSeason)) {
                        return res;
                    }
                })[0];
                this.$store.commit('setSeasonInfo', seasonInfo);
                // this.$store.commit('setCurrentSeason', this.currentSeason);
            });
        } catch (e) {
            console.log(e);
        }
    },
    computed: {
        seasons() {
            return this.$store.getters['seasons'];
        },
    },
    methods: {
        handleSelect(key, keyPath) {
            if (key === null) {
                return;
            }
            if (key === 'guide') {
                this.$store.commit('setCurrentSeason', this.currentSeason);
                this.$router.push('/' + this.currentSeason + '/' + key);
                return;
            }
            if (keyPath.length > 1) {
                this.currentSeason = key;
                this.$store.commit('setCurrentSeason', this.currentSeason);
                // this.$router.push('/seasons/' + key);
            } else {
                this.$router.push('/' + this.currentSeason + '/' + key);
            }
            let seasonInfo = this.$store.state.seasonList.filter(res => {
                if (res.num === Number(this.currentSeason)) {
                    return res;
                }
            })[0];

            this.$store.commit('setSeasonInfo', seasonInfo);
            this.$store.commit('setCurrentSeason', this.currentSeason);

        },
        selectSeason() {
            this.$store.commit('setCurrentSeason', this.currentSeason);
        },
    },
}
</script>

<style scoped>

</style>
