import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart ,faHouse, faUser, faCirclePlus, faStore, faInbox, faBars, faMessage } from '@fortawesome/free-solid-svg-icons' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'



library.add( faHouse, faUser, faCirclePlus, faStore, faBars, faInbox, faHeart, faMessage)
const app = createApp(App)


app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
