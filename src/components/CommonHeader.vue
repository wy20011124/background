<template>
  <div class="header">
    <div class="l-header">
      <el-button size="small" @click="handleCollapse">
        <el-icon :size="20" v-if="!$store.state.collapse"
          ><ArrowLeftBold
        /></el-icon>
        <el-icon :size="20" v-else="$store.state.collapse"
          ><ArrowRightBold
        /></el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{
          current.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-header">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../assets/img/t.1.jpeg" class="user">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="quit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter} from 'vue-router'
export default defineComponent({
  setup() {
    const store = useStore();
    const current = computed(() => {
      // console.log(store.state.currentMenu);
      return store.state.currentMenu;
    });
    const handleCollapse = () => {
      store.commit('updateCollapse');
    };
    const router =useRouter()
    const quit=()=>{
      store.commit('cleanMenu')
      store.commit('cleanToken')
      router.push({
        name:'login'
      })
    }
    return {
      handleCollapse,
      current,
      quit
    };
  },
});
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background-color: #333;
}
.l-header {
  display: flex;
  align-items: center;
}
.l-header h3 {
  color: #fff;
  margin-left: 10px;
}
.bread :deep(span){
  color: #fff !important;
  cursor:pointer !important;
}
.bread{
  margin-left:10px ;
}
.user{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
