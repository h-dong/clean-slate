import Vue from 'vue';
import Vuex from 'vuex';
import { AUTH } from '@/firebase';

import Login from '@/store/modules/login';
import Todos from '@/store/modules/todos';

Vue.use(Vuex);

const debug = process.env.ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    Login,
    Todos,
  },
  mutations: {
    CLEAR_APP_STATE() {
      for (const module in store._modulesNamespaceMap) {
        store.commit(`${module}RESET_STATE`);
      }
    },
  },
  strict: debug,
});

// handle page reload
AUTH.onAuthStateChanged(user => {
  if (user) {
    store.commit('Login/SET_CURRENT_USER', user);
    // TODO: implement the follow or remove them
    // store.dispatch('fetchUserProfile');

    // FIRESTORE.collection('users').doc(user.uid).onSnapshot((doc) => {
    //   store.commit('setUserProfile', doc.data());
    // });
  }
});

export default store;
