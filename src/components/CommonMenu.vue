<template>
  <div class="menu">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :collapse="$store.state.collapse"
      :collapse-transition="false"
    >
    <h3>{{$store.state.collapse ? "后台" : "通用后台管理系统"}}</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noChild"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <component class="icons" :is="item.icon"></component>
        <span class="myspan">{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.label" v-for="item in hasChild" :key="item.label">
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span class="myspan">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="subItem.path"
            v-for="(subItem, subIndex) in item.children"
            :key="subIndex"
            @click="clickMenu(subItem)"
          >
            <component class="icons" :is="subItem.icon"></component>
            <span class="myspan">{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import { useStore } from 'vuex';
export default {
  setup() {
    const store=useStore()
    const router=useRouter()
    // const list = [
    //   // {
    //   //   path: '/',
    //   //   name: 'home',
    //   //   label: '首页',
    //   //   icon: 's-home',
    //   //   url: 'Home/Home',
    //   // },
    //   {
    //     path: '/user',
    //     name: 'user',
    //     label: '用户管理',
    //     icon: 'user',
    //     url: 'UserManage/UserManage',
    //   },
    //   {
    //     label: '其他',
    //     icon: 'location',
    //     path: '/other',
    //     children: [
    //       {
    //         path: '/page1',
    //         name: 'page1',
    //         label: '页面1',
    //         icon: 'setting',
    //         url: 'Other/PageOne',
    //       },
    //       {
    //         path: '/page2',
    //         name: 'page2',
    //         label: '页面2',
    //         icon: 'setting',
    //         url: 'Other/PageTwo',
    //       },
    //     ],
    //   },
    // ];
    const list=store.state.menu
    const noChild = list.filter((item) => !item.children);
    const hasChild = list.filter((item) => item.children);
    const clickMenu=(item)=>{
         router.push({
            name:item.name
         })
         console.log(hasChild)
         store.commit('selectMenu',item)
    }
    return {
      noChild,
      hasChild,
      clickMenu
    };
  },
};
</script>

<style scoped lang="less">
.menu {
  width: 100%;
  height: 100%;
  background-color: #545c64;
  overflow: hidden;
  h3{
  text-align: center;
  color: azure;
  line-height: 48px;
  }
}
.el-menu {
  border-right: none;
  margin: 0;
}
.icons {
  width: 18px;
  height: 18px;
}
.myspan{
  margin-left: 5px;
}
</style>
