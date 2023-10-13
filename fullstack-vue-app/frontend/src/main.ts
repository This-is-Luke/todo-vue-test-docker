import {
    ComponentOptions,
    ComputedOptions,
    MethodOptions,
    createApp,
} from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

// TypeScript's type assertion to bypass the type check. (unsure)
createApp(
    App as unknown as ComponentOptions<
        any,
        any,
        any,
        ComputedOptions,
        MethodOptions
    >
)
    .use(store)
    .use(router)
    .mount('#app')
