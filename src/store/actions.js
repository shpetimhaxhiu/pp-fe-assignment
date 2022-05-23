import APIWrapper from '../api'

const API = new APIWrapper();

const actions = {

    // Update users store
    updateUsersList({ commit }) {
        commit('SET_LIST', null)

        return API.getData()
            .then(data => commit('SET_LIST', data))
            .catch(err => commit('SET_LIST', err))
    },

    // Remove single user (just from the store)
    removeUser({ commit }, id) {
        commit('REMOVE_USER', id);
    }

}

export default actions