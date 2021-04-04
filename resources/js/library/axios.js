import Vue from "vue";
import axios from "axios";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common["X-CSRF-TOKEN"] = window.laravel.csrf_token;
axios.defaults.baseURL = window.laravel.base_url;
// window.$axios = axios;
Vue.prototype.$axios = axios;
