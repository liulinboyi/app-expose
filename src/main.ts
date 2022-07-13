import { createApp, h, ref } from 'vue'
import App from './App.vue'
const appRef = ref()
const app = createApp({
    render() {
        return h(App, {ref: appRef})
    }
})
app.mount('#app')
console.log(appRef.value, appRef.value.instance)
