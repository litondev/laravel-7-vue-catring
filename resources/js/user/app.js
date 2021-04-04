import Vue from 'vue';

import "@/library/axios.js";
import "@/library/v-toaster.js";
import "@/library/vee-validate.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import Root from './Root.vue';
import Store from  '@/store/index.js';
import Routes from './routes.js';

Vue.config.devtools = false;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store : Store,
    router: Routes,
    render: h => h(Root)
});