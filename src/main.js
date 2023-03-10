import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faHeart ,faHouse, faUser, faCirclePlus, faStore, faInbox, faBars, faMessage, faShare, faComment, faTruck, faCartShopping, faTrash, faMoneyBill, faCashRegister } from '@fortawesome/free-solid-svg-icons' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'



library.add( faShare, faHouse, faUser, faCirclePlus, faStore, faBars, faInbox, faHeart, faComment, faTruck, faCartShopping, faMessage, faTrash, faMoneyBill, faCashRegister)
const app = createApp(App)


app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
