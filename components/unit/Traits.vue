<template>
    <div class="pt16 pb16">
        <div v-for="(trait, t_idx) in traits" :key="traits.id" class="pb8 flex align-center">
            <div class="unit_img_box trait_box in_block cursor"
                 @click="movePage('/'+ $route.params.seasons + '/trait/' + trait.id)"
                 :style="`background-image: url(${trait.iconPath})`">
            </div>
            <div class="in_block pl14 bold cursor theme-text-color ellipsis"
                 @click="movePage('/'+ $route.params.seasons + '/trait/' + trait.id)"
                 style="width: 130px;">{{ trait.krName }}</div>
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
    methods: {
        movePage(url) {
            this.$router.push(url);
        },
    },
}
</script>

<style scoped>

</style>
