// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueLazyload from 'vue-lazyload'
import './styles/global.scss'
// import './styles/css/mui.min.css'
import {
    Navbar,
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Cell,
    Button,
    DatetimePicker,
    Header,
    Field,
    Toast,
    Badge,
    Popup,
    IndexList,
    IndexSection,
    InfiniteScroll,
    Spinner,
    Checklist,
    MessageBox,
    CellSwipe,
    Loadmore
} from 'mint-ui'
import { DatetimePlugin } from 'vux';

import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

import 'fetch-polyfill'                             // 引入fetch兼容库，低版本webkit需要
import store from './store';
import router from './router'

Vue.use(Vuex);
Vue.use(DatetimePlugin);
Vue.use(InfiniteScroll);
Vue.use(VueLazyload, {                              // 图片懒加载库配置
  preLoad: 1.3,
  attempt: 3,                                       // 图片加载尝试次数
  listenEvents: [ 'scroll', 'touchmove', 'wheel', 'mousewheel', 'resize']   // 懒加载触发事件注册
});

Vue.config.productionTip = false
Vue.component('echart', ECharts);
Vue.component(Popup.name, Popup);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Tabbar.name, Tabbar);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
Vue.component(Toast.name, Toast);
Vue.component(Badge.name, Badge);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Spinner.name, Spinner);
Vue.component(Checklist.name, Checklist);
Vue.component(CellSwipe.name, CellSwipe);

// Vue.directive('focus', {
//   // 当绑定元素插入到 DOM 中。
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
