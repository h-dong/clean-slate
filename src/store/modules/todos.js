const getInitialState = () => ({
  Todos: [],
});

const Todos = {
  namespaced: true,
  state: getInitialState(),
  getters: {
    hasTodos: state => state.Todos.length > 0,
  },
  actions: {
    add() {
      state.Todos.push({
        title: 'A new todo',
        description: 'A not very interesting description',
        date: new Date(),
      });
    },
    remove() {},
  },
  mutations: {
    // eslint-disable-next-line no-unused-vars
    resetState(state) {
      state = Object.assign(state, getInitialState()); // eslint-disable-line no-param-reassign
    },
  },
};

export { Todos as default };
