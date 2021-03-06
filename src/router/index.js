import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home.vue'
import UnreadRecord from '../view/UnreadRecord.vue';
import customer from './customer.js';
import plan from './plan.js';
import chart from './chart.js';
import mail from './mail.js';

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/unread',
            name: 'UnreadRecord',
            component: UnreadRecord
        }

    ].concat(customer, plan, chart, mail)
})
