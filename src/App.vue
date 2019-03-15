<template>
  <div id="app">
    <Header />
    <Navigation v-if="isAuthenticated" />
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default {
  components: { Header, Navigation },
  computed: {
    ...mapState("Login", {
      isAuthenticated: state => state.User
    })
  }
};
</script>

<style lang="stylus" scoped>
@import "styles.styl";

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+SC|Open+Sans&subset=chinese-simplified');
// font-family: 'Noto Serif SC', serif;
// font-family: 'Open Sans', sans-serif;

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: -8px;
  height: 100vh;
  color: #2c3e50;
  background-color: #E5E5E5;
}
</style>
