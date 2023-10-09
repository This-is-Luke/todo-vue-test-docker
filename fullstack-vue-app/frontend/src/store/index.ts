import { createStore } from 'vuex'

interface State {
    isAuthenticated: boolean
}

export default createStore<State>({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setAuthenticate(state: State, value: any) {
            state.isAuthenticated = value
        },
        setAuthenticated(state: State, value: boolean) {
            state.isAuthenticated = value
        },
    },
})
