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
    SET_CURRENT_USER(state, payload) {
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
    RESET_STATE(state) {
      state = Object.assign(state, getInitialState());
    },
  },
};

export { Login as default };
