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
                    <template slot="title">시즌 {{ season }}</template>
                    <el-menu-item v-for="(season, s_idx) in this.$store.state.sessionList" :index="season.name"
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
            season: '7',
            activeIndex: '1',
            augment: false,
            trait: false,
        };
    },
    mounted() {
    },
    methods: {
        nameFilterSet(name) {

        },
        handleSelect(key, keyPath) {
            if (key === null) {
                return;
            }
            if (key === 'guide') {
                this.$router.push('/'+ key + '/' + this.season + '/unit')
                return;
            }
            if (keyPath.length > 1) {
                this.season = key;
                // this.$router.push('/seasons/' + key);
            } else {
                this.$router.push('/' + key + '/' + this.season);
            }

        },
    },
}
</script>

<style scoped>

</style>
