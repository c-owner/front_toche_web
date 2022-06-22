<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    asyncData({ store }) {
        return store.dispatch("getSeasonList");
    },
}
</script>
