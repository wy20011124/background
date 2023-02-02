<template>
  <div class="tags">
    <el-tag
    v-for="(tab,index) in tabs"
    :key="tab.name"
    :closable="tab.name!='home'"
    :disable-transitions="false"
    :effect="$route.name==tab.name ? 'dark' : 'plain'"
    @click="changeMenu(tab)"
    @close="handerClose(tab,index)"
    >
    {{tab.label}} 
    </el-tag>
  </div>
</template>

<script>
import { useRouter,useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
    setup(){
        const store=useStore()
        const router=useRouter()
        const route=useRoute()
        const tabs=store.state.tabsList
        const changeMenu=(tab)=>{
            router.push({
                name:tab.name
            })
        }
        const handerClose=(tab,index)=>{
         let length=tabs.length-1
         store.commit('closeTab',tab)
           if(tab.name!==route.name){
            return
           }
           if(index===length){
            router.push({
                name:tabs[index-1].name
            })
           }else{
            router.push({
                name:tabs[index].name
            })
           }
        }
        return {
            tabs,
            changeMenu,
            handerClose
        }
    }
};
</script>

<style lang="less" scoped>
.tags{
    cursor:pointer !important;
    width: 100%;
}
.el-tag{
    margin: 10px;
}
</style>
