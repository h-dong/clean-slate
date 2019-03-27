const getInitialState = () => ({
  Todos: [],
});

const Todos = {
  namespaced: true,
  state: getInitialState(),
  getters: {
    HAS_TODO: state => state.Todos.length > 0,
    GET_ALL: state => state.Todos.filter(todo => todo.deleted !== true),
  },
  actions: {
    ADD({ commit }, newTodo) {
      commit('ADD_TODO', newTodo);
    },
    DELETE({ commit }, id) {
      commit('DELETE_TODO', id);
    },
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.Todos.push(todo);
    },
    DELETE_TODO(state, id) {
      const todos = [...state.Todos];
      todos.forEach(todo => {
        if (todo.id === id) todo.deleted = true;
      });
      state.Todos = todos;
    },
    RESET_STATE(state) {
      state = Object.assign(state, getInitialState());
    },
  },
};

export { Todos as default };
