const state = {
    counter: 0
}
const getters = {
    getCounter(state) {
        return state.counter;
    },
    getTripleCounter(state) {
        return state.counter * 3;
    },
    stringCounter(state) {
        return state.counter + ". kez tıklandı."
    }
}
const mutations = {
    updateCounter(state, value) {
        state.counter += value;
    },
    increaseCounter(state) {
        state.counter++;
    },
    decreaseCounter(state) {
        state.counter--;
    }
}

const actions = {
    increment({ commit }) {
        commit("increaseCounter");
    },
    decrement({ commit }) {
        commit("decreaseCounter");
    },
    incrementAsync({ commit }, payload) {
        setTimeout(() => {
            commit("increaseCounter")
        }, payload.time)
    },
    decrementAsync({ commit }, payload) {
        setTimeout(() => {
            commit("decreaseCounter")
        }, payload.time)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}