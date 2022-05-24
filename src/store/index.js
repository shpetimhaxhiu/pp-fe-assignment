import { createStore } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
    usersList: [],
    haveUsers: false,
    hasError: null,
    isLoading: false
}

export const store = createStore({
    actions,
    getters,
    mutations,
    state
})