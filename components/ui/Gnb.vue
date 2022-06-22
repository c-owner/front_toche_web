<template>
    <div class="header side-center">
        <div class="text-left">
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
                <el-menu-item index="1">덱 가이드</el-menu-item>

                <el-submenu index="2">
                    <template slot="title">시즌 {{ season[0] }}</template>
                    <el-submenu index="2-4">
                        <template slot="title">item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2-1">증강</el-menu-item>
                    <el-menu-item index="2-2">챔피언</el-menu-item>
                    <el-menu-item index="2-3">특성</el-menu-item>
                    <el-menu-item index="2-3">아이템</el-menu-item>
                    <el-menu-item index="2-3">추천 덱</el-menu-item>
                </el-submenu>

            </el-menu>
        </div>
        <div>
            <el-select
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
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gnb",

    data() {
        return {
            seasonOptions: [{
                value: 1,
                label: '시즌1'
            }, {
                value: 2,
                label: '시즌2'
            }, {
                value: 3,
                label: '시즌3'
            }, {
                value: 4,
                label: '시즌4'
            }, {
                value: 5,
                label: '시즌5'
            }, {
                value: 6,
                label: '시즌6'
            }, {
                value: 7,
                label: '시즌7'
            }
            ],
            season: [],
            currentSeason: '',
            activeIndex: '1',

        };
    },
    mounted() {
    },
    methods: {
        handleSelect(key, keyPath) {

            console.log(key, keyPath);
        },
    },
}
</script>

<style scoped>

</style>
