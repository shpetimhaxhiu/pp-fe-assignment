import APIWrapper from '../api'

const API = new APIWrapper();

const actions = {

    // Update users store
    updateUsersList({ commit }) {
        // commit('SET_LIST', null)
        commit('SET_LOADING')
        API.getData()
            .then((data) => {
                commit('SET_LIST', data)
                commit('SET_LOADED')
                commit('UNSET_LOADING')
            })
            .catch((err) => {
                commit('SET_ERROR', err)
                commit('UNSET_LOADING')
            })
    },

    setUnloaded({ commit }) {
        commit('SET_UNLOADED')
    },

    // Remove single user (just from the store)
    removeUser({ commit }, id) {
        commit('REMOVE_USER', id);
    }

}

export default actions