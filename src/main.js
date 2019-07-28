import Vue from 'vue'
import App from './App.vue'

// Scroll plugin
let VueScrollTo = require('vue-scrollto');

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Internationalization
import VueI18n from 'vue-i18n'


Vue.config.productionTip = false;

Vue.use(VueI18n);

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -80,
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
}).$mount('#app');
