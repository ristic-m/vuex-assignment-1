import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex' // import the module "createStore" from vuex (which we installed)

// creating the store to be used.
const store = createStore({
	state () {
		return {
			count: 0
		}
	},
	mutations: {
		increaseCount (state) {
			state.count++;
		},
		decreaseCount (state) {
			state.count--;
		},
		doubleCount (state) {
			state.count*=2
		}
	}
})


const app = createApp(App)

// install and add 'store' instance as a plugin to the app:
app.use(store)

app.mount('#app')
