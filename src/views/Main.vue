<template>
  <div class="common-layout">
    <el-container class="main">
        <el-aside :width="$store.state.collapse ? '65px' : '180px'">
            <CommonMenu></CommonMenu>
        </el-aside>
      <el-container>
        <el-header class="main-header"><CommonHeader></CommonHeader></el-header>
        <CommonTag></CommonTag>
        <el-main class="main-main"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonMenu from '../components/CommonMenu.vue'
import CommonTag from '../components/CommonTag.vue'
export default defineComponent({
  components: {
    CommonHeader,
    CommonMenu,
    CommonTag
  },
});
</script>

<style scoped>
.main,.common-layout {
  width: 100%;
  height: 100%;
}
.main-main{
  padding:0 10px !important;
}
.main-header,.main-main{
    padding: 0;
    /* margin: 0; */
}

</style>
