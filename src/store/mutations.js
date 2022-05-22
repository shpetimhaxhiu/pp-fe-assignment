const mutations = {

    SET_LIST(state, payload) {
        state.usersList = payload
    },

    REMOVE_USER(state, id) {
        index = state.usersList.findIndex(user => user.id == id);
        state.usersList.splice(index, 1);
    }
}

export default mutations