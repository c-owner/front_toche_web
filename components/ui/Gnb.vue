<template>
    <div class="header side-center">
        <div class="text-left cursor" @click="$router.push('/')">
            <img src="@/assets/images/toche-Logo-512.png" alt="logo" width="80px;" />
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
                    index="season">
                    <template slot="title">시즌 {{ season }}</template>
                    <el-menu-item index="1">시즌1</el-menu-item>
                    <el-menu-item index="2">시즌2</el-menu-item>
                    <el-menu-item index="3">시즌3</el-menu-item>
                    <el-menu-item index="4">시즌4</el-menu-item>
                    <el-menu-item index="5">시즌5</el-menu-item>
                    <el-menu-item index="6">시즌6</el-menu-item>
                    <el-menu-item index="7">시즌7</el-menu-item>
                </el-submenu>

                <el-menu-item index="augment">증강</el-menu-item>
                <el-menu-item index="unit">챔피언</el-menu-item>
                <el-menu-item index="trait">특성</el-menu-item>
                <el-menu-item index="item">아이템</el-menu-item>
                <el-menu-item index="deck">추천 덱</el-menu-item>
            </el-menu>
        </div>
        <div>

            <!--            <el-select
                class="cursor in_block"
                v-model="season"
                collapse-tags
                style="margin-left: 20px;"
                placeholder="시즌 선택">
                <el-option
                    v-for="season in seasonOptions"
                    :key="season.value"
                    :label="season.label"
                    :value="season.value">
                </el-option>
            </el-select>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "Gnb",

    data() {
        return {
            season: '7',
            activeIndex: '1',

        };
    },
    mounted() {
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
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
