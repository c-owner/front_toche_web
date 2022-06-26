<template>
    <div>
        <div v-for="(unit, u_idx) in $store.state.unitList" :key="unit.id">
            <div>{{ unit.name }}</div>

        </div>
    </div>
</template>

<script>
export default {
    name: "UnitUnit"
}
</script>

<style scoped>

</style>
