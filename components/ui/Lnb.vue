<template>
    <div class="lnb">
        <ul v-if="has_arr_empty(units)" class="pb16" style="max-height: 800px">
            <li v-for="(unit, u_idx) in units" :key="unit.id" class="unit-list">
                <div class="unit-box" @click="getUnitDetail(unit.id)">
                    <div class="unit_img_box p-relative" :style="`background: url(${unit.iconPath}) center / contain`">
                        <el-badge :value="unit.cost" class="item p-absoulte lnb_unit_box" style="left: 3px;"></el-badge>
                    </div>
                    <div class="unit_name">{{ unit.krName }}</div>
                </div>
            </li>
        </ul>
        <ul v-else-if="has_arr_empty(items)" class="pb16" style="max-height: 80vh">
            <li
                v-for="(item, index) in items" :key="item.id" class="unit-list">
                <div class="unit-box" @click="getItemDetail(item.id)">
                    <div class="unit_img_box p-relative" :style="`background: url(${item.iconPath}) center / contain`">
                    </div>
                    <div class="unit_name">{{ item.krName }}</div>
                </div>
            </li>
        </ul>
        <ul v-else-if="has_arr_empty(traits)" class="pb16" style="max-height: 80vh">
            <li
                v-for="(trait, index) in traits" :key="trait.id" class="unit-list">
                <div class="unit-box" @click="getTraitDetail(trait.id)">
                    <div class="unit_img_box p-relative"
                         :style="`background: url(${trait.iconPath}) center / contain; background-color: #222;`">
                    </div>
                    <div class="unit_name">{{ trait.krName }}</div>
                </div>
            </li>
        </ul>
        <ul v-else-if="has_arr_empty(augments)" class="pb16" style="max-height: 80vh">
            <li
                v-for="(augment, index) in augments" :key="augment.id" class="unit-list">
                <div class="unit-box" @click="getAugmentDetail(augment.id)">
                    <div class="unit_img_box p-relative"
                         :style="`background: url(${augment.iconPath}) center / contain; background-color: #222;`">
                    </div>
                    <div class="unit_name">{{ augment.krName }}</div>
                </div>
            </li>
        </ul>
        <ul v-else-if="has_arr_empty(deckUnit)" class="pb16" style="max-height: 80vh">
            <el-button type="primary" class="w100p" @click="initSelect">초기화</el-button>
            <li
                v-for="(unit, index) in deckUnit" :key="unit.id" class="unit-list">
                <div class="unit-box" @click="selectUnits(unit)">
                    <div class="unit_img_box p-relative"
                         :class="{'selected': selects.includes(unit)}"
                         :style="`background: url(${unit.iconPath}) center / contain`">
                        <el-badge :value="unit.cost" class="item p-absoulte lnb_unit_box" style="left: 3px;"></el-badge>
                    </div>
                    <div class="unit_name">{{ unit.krName }}</div>
                </div>
            </li>
        </ul>
        <ul v-else-if="has_arr_empty(deckAugment)" class="pb16" style="max-height: 80vh">
            <el-button type="primary" class="w100p" @click="initAugment">초기화</el-button>
            <li
                v-for="(augm, index) in deckAugment" :key="augm.id" class="unit-list">
                <div class="unit-box" @click="selectAugments(augm)">
                    <div class="unit_img_box p-relative"
                         :class="{'selected': a_selects.includes(augm)}"
                         :style="`background: url(${augm.iconPath}) center / contain`">
                    </div>
                    <div class="unit_name">{{ augm.krName }}</div>
                </div>
            </li>
        </ul>
        <ul v-else>
            <div v-loading="loading"
                 element-loading-text="Loading..."
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.8)"
                 style="width: 100%">
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Lnb",
    props: ['units', 'items', 'traits', 'augments', 'deckUnit', 'selects', 'deckAugment', 'a_selects'],
    data() {
        return {
            loading: true,
        }
    },
    methods: {
        has_arr_empty(arr) {
            return Array.isArray(arr) && arr.length > 0;
        },
        getUnitDetail(id) {
            this.movePage('/' + this.$route.params.seasons + '/unit/' + id);
        },
        getItemDetail(id) {
            this.movePage('/' + this.$route.params.seasons + '/item/' + id)
        },
        getTraitDetail(id) {
            this.movePage('/' + this.$route.params.seasons + '/trait/' + id)
        },
        getAugmentDetail(id) {
            this.movePage('/' + this.$route.params.seasons + '/augment/' + id)
        },
        movePage(url) {
            this.$router.push(url);
        },
        async selectUnits(unit) {
            if (this.selects.includes(unit)) {
                this.selects = this.selects.filter(u => u.id !== unit.id);
            } else {
                if (this.selects.length > 6) {
                    this.$message.error('최대 7개까지 선택 가능합니다.');
                    return;
                }
                this.selects.push(unit);
            }
            await this.$emit('selectUnits', this.selects);
        },
        async initSelect() {
            await this.$emit('selectUnits', []);
        },
        async selectAugments(augm) {
            if (this.a_selects.includes(augm)) {
                this.a_selects = this.a_selects.filter(u => u.id !== augm.id);
            } else {
                if (this.a_selects.length > 2) {
                    this.$message.error('최대 3개까지 선택 가능합니다.');
                    return;
                }
                this.a_selects.push(augm);
            }
            await this.$emit('selectAugments', this.a_selects);
        },
        async initAugment() {
            await this.$emit('selectAugments', []);
        },
    },
}
</script>

<style scoped>
.selected {
    border: 1px solid #F66947;
}
</style>
