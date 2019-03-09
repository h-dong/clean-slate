<template>
  <div class="login">
    <div class="message">
      <h3>Hello there!</h3>
      <p>Welcome to the Clean Slate Todo App.</p>
      <p>
        <span>This app is still in beta testing phase.</span>
        <span>Which means we are still tweaking and improving it!</span>
      </p>
    </div>
    <GoogleAuthButton @buttonClicked="login" />
    <div class="message">
      <p>More login methods coming soon...</p>
    </div>
  </div>
</template>

<script>
import GoogleAuthButton from "@/components/GoogleAuthButton";
import { ROUTES } from "@/router";
import { AUTH, FIRESTORE, PROVIDER } from "@/firebase";

export default {
  components: {
    GoogleAuthButton
  },
  data() {
    return {
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: ""
    };
  },
  mounted() {
    if (AUTH.currentUser) this.redirectAfterAuth();
  },
  methods: {
    login() {
      this.performingRequest = true;
      this.firebaseGoogleAuth();
    },
    firebaseGoogleAuth() {
      const provider = new PROVIDER.GOOGLE();

      AUTH.signInWithRedirect(provider);
    },
    redirectAfterAuth() {
      AUTH.getRedirectResult()
        .then(result => {
          if (result.user) {
            this.$store.commit("Login/setCurrentUser", result.user);

            const userRef = FIRESTORE.collection("users").doc(result.user.uid);

            userRef.get().then(document => {
              if (!document.exists) {
                const initData = { todos: [], tags: [] };

                userRef
                  .set(initData)
                  .then(() => {
                    this.$router.push({ name: ROUTES.FOCUS });
                  })
                  .catch(error => {
                    console.log(error); // eslint-disable-line no-console
                  });
              } else {
                this.$router.push({ name: ROUTES.FOCUS });
              }
            });
          }
        })
        .catch(error => {
          console.log(error); // eslint-disable-line no-console
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 65px);
  user-select: none;

  .message {
    padding: 1rem;
  }
}
</style>
