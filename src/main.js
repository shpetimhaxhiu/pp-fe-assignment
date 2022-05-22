import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

// Include bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../src/assets/base.css"

const app = createApp(App);

// inject router
app.use(router);

// mount app
app.mount('#app');