<template>
  <div class="pt35">
      <div v-for="(item, i_idx) in mostItem" :key="item.id" class="mb30 most_list">
          <div class="mostitem_icon flex align-center p-relative cursor"
               @click="movePage('/' + $route.params.seasons + '/item/' + item.id)">
              <div class="unit_img_box p-relative" :style="`background: url(${item.iconPath}) center / contain`">
                  <el-badge :value="item.championUsedCount" class="item p-absoulte"></el-badge>
              </div>
              <div class="in_block pl14 bold">{{ item.krName }}</div>
          </div>
          <el-popover
              class="p-relative w100p h100p"
              style="top: 10px;"
              placement="bottom"
              :width="'100%'"
              trigger="manual"
              :title="item.krName"
              v-model="visible">
              <div v-html="item.desc"></div>
          </el-popover>
<!--          <div class="mostitem_desc" v-html="item.desc"></div>-->
      </div>
  </div>
</template>

<script>
export default {
    name: "MostItem",
    props: ['mostItem'],
    data() {
        return {
            visible: true,
        }
    },
    methods: {
        movePage(url) {
            this.$router.push(url);
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
