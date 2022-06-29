<template>
    <div class="unit_ability_info">
        <img class="unit_img_box" :src="ability.iconPath" width="45" height="45" alt="챔피언 특성 이미지"/>
        <div class="ability_title">{{ ability.krName }}
            <div class="ability_desc" v-html="ability.abilityDesc">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ability",
    props: ['ability']
}
</script>

<style scoped>

</style>
