<template>
    <div class="pt16 pb80">
        <div v-for="(trait, t_idx) in traits" :key="traits.id" class="pb8 flex align-center">
            <div class="unit_img_box trait_box in_block cursor"
                 :style="`background-image: url(${trait.iconPath})`">
            </div>
            <div class="in_block pl14 bold cursor">{{ trait.krName }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Traits",
    props: ['traits'],
    data() {
        return {
        };
    },
}
</script>

<style scoped>

</style>
