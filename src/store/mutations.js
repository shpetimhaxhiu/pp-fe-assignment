const mutations = {

    SET_LIST(state, payload) {
        state.usersList = payload
        state.haveUsers = true
    },
    SET_LOADED(state) {
        state.haveUsers = true
    },

    SET_UNLOADED(state) {
        state.haveUsers = false
    },

    REMOVE_USER(state, id) {
        index = state.usersList.findIndex(user => user.id == id);
        state.usersList.splice(index, 1);
    },

    SET_ERROR(state, message) {
        state.hasError = message
    }
}

export default mutations