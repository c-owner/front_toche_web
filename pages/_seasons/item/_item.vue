<template>
    <div class="w100p flex unit_wrap">

    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {

        }
    },
    created() {
        this.getItemList();
    },
    mounted() {

    },
    beforeDestroy() {
    },
    computed: {
    },
    methods: {
        getItemList() {
            let data = this.$store.dispatch('getItemList').then((res) => {
                return res;
            });
        },
    }

}
</script>

<style scoped>

</style>
