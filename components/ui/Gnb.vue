<template>
    <div class="header side-center">
        <div class="text-left cursor" @click="$router.push('/')">
            <img src="@/assets/images/toche-Logo-512.png" alt="logo" width="80" />
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
                <el-menu-item index="guide" >덱 가이드</el-menu-item>

                <el-submenu
                    :hide-timeout="500"
                    popper-class="seasons-menu"
                    index="season">
                    <template slot="title">시즌 {{ currentSeason }}</template>
                    <el-menu-item v-for="(season, s_idx) in $store.state.sessionList" :index="season.num.toString()"
                                  :key="s_idx">
                        {{ season.title }}
                    </el-menu-item>
                </el-submenu>

                <el-menu-item index="unit">챔피언</el-menu-item>
                <el-menu-item index="item">아이템</el-menu-item>
                <el-menu-item index="deck">추천 덱</el-menu-item>
                <el-menu-item index="augment">증강체</el-menu-item>
                <el-menu-item index="trait">특성</el-menu-item>
            </el-menu>
        </div>
        <div class="none_item"></div>

    </div>
</template>

<script>
export default {
    name: "Gnb",
    data() {
        return {
            currentSeason: '7',
            activeIndex: '1',
            augment: false,
            trait: false,
        };
    },
    async mounted() {
        try {

        await this.$api.season.getSeasonList().then(res => {

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

            this.$store.commit('setSessionList', res);
            this.$store.commit('setCurrentSeason', this.currentSeason);
        });
        } catch (e) {
            console.log(e);
        }
    },
    methods: {
        nameFilterSet(name) {

        },
        handleSelect(key, keyPath) {
            if (key === null) {
                return;
            }
            if (key === 'guide') {
                this.$store.commit('setCurrentSeason', this.currentSeason);
                this.$router.push('/'+ key + '/' + this.currentSeason)
                return;
            }
            if (keyPath.length > 1) {
                this.currentSeason = key;
                this.$store.commit('setCurrentSeason', this.currentSeason);
                // this.$router.push('/seasons/' + key);
            } else {
                this.$router.push('/' + key + '/' + this.currentSeason);
            }

        },
    },
}
</script>

<style scoped>

</style>
