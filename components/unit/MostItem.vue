<template>
  <div class="pt16">
      <div v-for="(item, i_idx) in mostItem" :key="item.id" class="mostitem_list">
          <div class="mostitem_icon">

          </div>
          <div class="mostitem_count" style="color: #ff9900">
            {{ item.championUsedCount }}
          </div>
          <div class="mostitem_desc" v-html="item.desc"></div>

      </div>
  </div>
</template>

<script>
export default {
    name: "MostItem",
    props: ['mostItem'],
}
</script>

<style scoped>

</style>
