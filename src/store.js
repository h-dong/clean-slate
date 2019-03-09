import Vue from "vue";
import Vuex from "vuex";
import { AUTH } from "@/firebase";

import Login from "@/views/Login/store";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    Login
  },
  strict: debug
});

// handle page reload
AUTH.onAuthStateChanged(user => {
  if (user) {
    store.commit("Login/setCurrentUser", user);
    // TODO: implement the follow or remove them
    // store.dispatch('fetchUserProfile');

    // FIRESTORE.collection('users').doc(user.uid).onSnapshot((doc) => {
    //   store.commit('setUserProfile', doc.data());
    // });
  }
});

export default store;
