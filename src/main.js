import Vue from 'vue'
import store from './store'
import App from './App.vue'
import VueRouter from 'vue-router'
import Site from './Site'

// Scroll plugin
let VueScrollTo = require('vue-scrollto');

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/*', component: Site},
    ]
})

Vue.use(VueRouter)

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -400,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

new Vue({
    render: h => h(App),
    store, 
    router
}).$mount('#app');
