<template>
    <div class="unit_status">
        <div class="status_box">
            <div class="status_title">체력</div>
            <div class="status_value">{{ stats.hp }}</div>
        </div>
        <div class="status_box">
            <div class="status_title">공격력</div>
            <div class="status_value">{{ stats.damage }}</div>
        </div>
        <div class="status_box">
            <div class="status_title">마나</div>
            <div class="status_value">{{ stats.initialMana }} / {{ stats.mana }}</div>
        </div>
        <div class="status_box">
            <div class="status_title">DPS</div>
            <div class="status_value">{{ stats.attackSpeed }}</div>
        </div>
        <div class="status_box">
            <div class="status_title">방어력</div>
            <div class="status_value">{{ stats.armor }}</div>
        </div>
        <div class="status_box">
            <div class="status_title">마법저항력</div>
            <div class="status_value">{{ stats.magicResist }}</div>
        </div>
        <div class="status_box">
            <div class="status_title">치명타</div>
            <div class="status_value">{{ stats.critChance }}</div>
        </div>
        <div class="status_box">
            <div class="status_title">치명타 배율</div>
            <div class="status_value">{{ stats.critMultiplier }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Stats",
    props: ['stats'],
    data() {
        return {
            progress_width: 25,
        };
    },
}
</script>

<style scoped>

</style>
