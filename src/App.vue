<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-if="isTabShow" v-model="selected" fixed>
      <mt-tab-item id="home">
          <div @click="onClick('home')">
            <div class="ico"><i class="iconfont icon-shouye-xianxing fs-24"/></div>
            <div style="font-size:11px;">首页</div>
          </div>
      </mt-tab-item>
      <mt-tab-item id="customer">
          <div @click="onClick('customer')">
            <div class="ico"><i class="iconfont icon-yonghu-xianxing fs-24"/></div>
            <div style="font-size:11px;">客户</div>
          </div>
      </mt-tab-item>
      <mt-tab-item id="mail">
          <div @click="onClick('/crm/salesman/hybrid')">
            <div class="ico"><i class="iconfont icon-yonghuziliao-xianxing fs-24"/></div>
            <div style="font-size:11px;">通讯录</div>
          </div>
      </mt-tab-item>
      <mt-tab-item id="plan">
          <div @click="onClick('/crm/plan/hybrid')">
            <div class="ico"><i class="iconfont icon-huodongqizi fs-24"/></div>
            <div style="font-size:11px;">计划</div>
          </div>
      </mt-tab-item>
      <mt-tab-item id="chart">
          <div @click="onClick('/crm/report/hybrid')">
              <div class="ico"><i class="iconfont icon-zhexiantu-xianxing fs-24"/></div>
              <div style="font-size:11px;">图表</div>
          </div>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'app',
    data () {
        return {
            selected: 'home',           // 当前激活的菜单
            isTabShow: true             // 用于标记底部菜单栏是否显示
        }
    },
    created () {
        const hash = document.location.hash.replace('#/', '');
        // 如果是模块主页面，则显示底部菜单
        if (['home', 'customer', 'plan', 'chart', 'mail'].indexOf(hash) > -1 || hash === '') {
            this.isTabShow = true;
        }
        else {
            this.isTabShow = false;
        }
        if (hash !== '') {
            // 处理当前激活的菜单
            if (hash.indexOf('customer') > -1) {
                this.selected = 'customer';
            }
            else if (hash.indexOf('plan') > -1) {
                this.selected = 'plan';
            }
            else if (hash.indexOf('chart') > -1) {
                this.selected = 'chart';
            }
            else if (hash.indexOf('mail') > -1) {
                this.selected = 'mail';
            }
            else {
                this.selected = hash;
            }
        }
    },
    updated () {
        const hash = document.location.hash.replace('#/', '');
        if (['home', 'customer', 'plan', 'chart', 'mail'].indexOf(hash) > -1 || hash === '') {
            this.isTabShow = true;
        }
        else {
            this.isTabShow = false;
        }
    },
    methods: {
        // 切换菜单
        onClick (path) {
            if (path === 'home') {
                this.$router.push({path: '/'});
            }
            else if (['customer', 'plan', 'mail', 'chart'].indexOf(path) > -1) {
                this.$router.push({path: '/' + path});
            }
            else {
                location.href = window.cxt + path;            // 底部tab切换监测，进行跳转
            }
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.mint-tabbar {
    height: 50px;
    line-height: 50px;
    border-top:1px solid #BEBEBE;
    .ico {
        height: 25px;
        line-height: 25px;
    }
}
.mint-tabbar > .mint-tab-item.is-selected  {
    background-color: #fafafa;
}
</style>
