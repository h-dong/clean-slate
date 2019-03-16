const getInitialState = () => ({
  User: null,
});

const Login = {
  namespaced: true,
  state: getInitialState(),
  getters: {
    User: state => state.User,
  },
  actions: {},
  mutations: {
    setCurrentUser(state, payload) {
      state.User = {
        createdAt: payload.createdAt,
        displayName: payload.displayName,
        emailVerified: payload.emailVerified,
        isAnonymous: payload.isAnonymous,
        lastLoginAt: payload.lastLoginAt,
        photoURL: payload.photoURL,
        providerData: payload.providerData,
        uid: payload.uid,
      };
    },
    // eslint-disable-next-line no-unused-vars
    resetState(state) {
      state = Object.assign(state, getInitialState()); // eslint-disable-line no-param-reassign
    },
  },
};

export { Login as default };
