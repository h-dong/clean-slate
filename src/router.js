import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Focus from "@/views/Focus";
import Plan from "@/views/Plan";
import Calendar from "@/views/Calendar";
import { AUTH } from "@/firebase";

Vue.use(Router);

const ROUTES = {
  LOGIN: "login",
  FOCUS: "focus",
  PLAN: "plan",
  CALENDAR: "calendar"
};

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/focus"
    },
    {
      path: "/login",
      name: ROUTES.LOGIN,
      component: Login
    },
    {
      path: "/focus",
      name: ROUTES.FOCUS,
      component: Focus,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/plan",
      name: ROUTES.PLAN,
      component: Plan,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/calendar",
      name: ROUTES.CALENDAR,
      component: Calendar,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = AUTH.currentUser;

  if (requiresAuth && !currentUser) {
    next(ROUTES.LOGIN);
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export { router as default, ROUTES };
