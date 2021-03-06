/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import 'es6-promise/auto'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import routes from './routes';
import store from './store';
window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Vuex);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('main-container', require('./components/MainContainer.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    vuetify: new Vuetify({
        theme: {
            themes: {
              light: {
                primary: '#4abdac',
                secondary: '#99ced4',
                accent: '#ee86b7',
                error: '#6e7376',
              },
            },
          },
    }),
    store: new Vuex.Store(store),
});
