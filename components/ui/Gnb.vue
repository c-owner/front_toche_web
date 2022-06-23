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
                    popper-class="seasons-menu"
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

                <el-menu-item index="unit">챔피언</el-menu-item>
                <el-menu-item index="item">아이템</el-menu-item>
                <el-menu-item index="deck">추천 덱</el-menu-item>


                <el-popover
                    ref="augmentPopover"
                    placement="bottom"
                    title="증강체"
                    width="500"
                    trigger="hover"
                    content="증강체 내용">
                    <el-link type="success" class="text-center cursor" slot="reference" v-popover:augmentPopover>증강체</el-link>
                </el-popover>
                <el-popover
                    ref="traitPopover"
                    placement="bottom"
                    title="특성"
                    width="500"
                    trigger="hover"
                    content="특성 내용">
                    <el-link type="primary" class="text-center" slot="reference" v-popover:traitPopover>특성</el-link>
                </el-popover>

<!--                <el-submenu index="info" :hide-timeout="500">
                    <el-popover
                        ref="augmentPopover"
                        placement="bottom"
                        title="증강체"
                        width="500"
                        trigger="hover"
                        content="증강체 내용">
                        <el-link type="success" class="text-center cursor" slot="reference" v-popover:augmentPopover>증강체</el-link>
                    </el-popover>
                    <div class="mb30"></div>
                    <el-popover
                        ref="traitPopover"
                        placement="bottom"
                        title="특성"
                        width="500"
                        trigger="hover"
                        content="특성 내용">
                        <el-link type="primary" class="text-center" slot="reference" v-popover:traitPopover>특성</el-link>
                    </el-popover>
                    <template slot="title" >정보</template>
                </el-submenu>-->


                <!--                <el-menu-item >증강</el-menu-item>-->
<!--                <el-menu-item @mouseover="openPopover('trait')" @mouseleave="closePopover('trait')">특성</el-menu-item>-->
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
            augment: false,
            trait: false,
        };
    },
    mounted() {
    },
    methods: {
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
        openPopover(key) {
            console.log(this[key])
            this[key] = true;
        },
        closePopover(key) {
            this[key] = false;
        },
    },
}
</script>

<style scoped>

</style>
