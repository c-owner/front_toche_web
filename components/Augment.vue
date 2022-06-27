<template>

    <div>
        <ul>
            <li v-for="(unit, u_idx) in $store.state.unitList" :key="unit.id" class="unit-list">
                <div class="unit-box">
                    <div class="unit-img-box">
                        <img src="~/assets/images/favicon.png" :src="unit.iconPath" alt="챔피언 이미지">
                    </div>
                    <div class="unit_name">{{ unit.krName }}</div>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: "Augment"
}
</script>

<style scoped>

</style>
