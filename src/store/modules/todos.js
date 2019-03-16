const getInitialState = () => ({
  Todos: [],
});

const Todos = {
  namespaced: true,
  state: getInitialState(),
  getters: {
    HAS_TODO: state => state.Todos.length > 0,
    GET_ALL: state => state.Todos,
  },
  actions: {
    ADD({ commit }, newTodo) {
      commit('ADD_TODO', newTodo);
    },
    REMOVE() {},
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.Todos.push(todo);
    },
    RESET_STATE(state) {
      state = Object.assign(state, getInitialState());
    },
  },
};

export { Todos as default };
