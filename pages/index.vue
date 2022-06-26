<template>
    <div>
        Main Vue
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    async mounted() {
        await this.$api.season.getSeasonList().then(res => {
            console.log(res)
            res.forEach((item, index) => {
                if (item.num) {
                    item.title = "시즌" + item.num;
                }
                if (item.name.indexOf('Tutorial') > 0) {
                    item.title = "시즌" + item.num + " 설명서";
                }
                if (item.name.indexOf('Stage') > 0) {
                    item.title = "시즌" + item.num + ".5";
                }
            });
            this.$store.commit('setSessionList', res);
        });
    }
}
</script>
