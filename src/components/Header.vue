<template>
  <header>
    <h3>Clean Slate Todo</h3>
    <div class="wrapper">
      <router-link to="login" v-if="!isLoginPage() && !isAuthenticated">
        <span>Login</span>
      </router-link>
      <button @click="logout" v-if="isAuthenticated">logout</button>
      <img :src="profilePic" v-if="isAuthenticated" class="profile">
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { ROUTES } from '@/router';
import { AUTH } from '@/firebase';

export default {
  data() {
    return {
      onLoginPage: false,
    };
  },
  mounted() {
    this.onLoginPage = this.$route.name === ROUTES.LOGIN;
  },
  computed: {
    ...mapState('Login', {
      isAuthenticated: state => state.User,
      profilePic: state => state.User.photoURL,
    }),
  },
  methods: {
    isLoginPage() {
      return this.$route.name === ROUTES.LOGIN;
    },
    logout() {
      AUTH.signOut()
        .then(() => {
          this.$store.commit('CLEAR_APP_STATE');

          this.$router.push({ name: ROUTES.LOGIN });
        })
        .catch(err => {
          console.log(err); // eslint-disable-line no-console
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  backface-visibility: hidden;
  background: #fff;
  border-bottom: 1px solid #e1e1e1;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s ease;
  width: 100%;

  h3 {
    padding: 0 1rem;
    margin: 0;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;

    button {
      border: none;
      font-size: 1rem;
      text-decoration: underline;
      margin: 0 0.5rem;
    }

    .profile {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
}
</style>
