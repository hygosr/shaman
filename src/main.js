import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import store from './store'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

Vue.use(VueMaterial);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	store,
}).$mount('#app')