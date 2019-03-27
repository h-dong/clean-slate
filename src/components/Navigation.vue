<template>
  <nav>
    <ul class="inline">
      <li>
        <router-link :to="{ name: routes.FOCUS }" :class="{ active: isActive(routes.FOCUS) }">
          <FormatListChecks decorative/>
          <span class="label">Focus</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: routes.PLAN }" :class="{ active: isActive(routes.PLAN) }">
          <Trello decorative/>
          <span class="label">Plan</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: routes.CALENDAR }" :class="{ active: isActive(routes.CALENDAR) }">
          <CalendarCheck decorative/>
          <span class="label">Calendar</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import FormatListChecks from 'vue-material-design-icons/FormatListChecks';
import Trello from 'vue-material-design-icons/Trello';
import CalendarCheck from 'vue-material-design-icons/CalendarCheck';
import { ROUTES } from '@/router';

export default {
  components: {
    FormatListChecks,
    Trello,
    CalendarCheck,
  },
  data() {
    return {
      routes: ROUTES,
    };
  },
  methods: {
    isActive(route) {
      return this.$route.name === route;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles.styl';

nav {
  ul {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      margin: 0.3rem;
      flex: 1 1 0;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: $font-size-button;
        text-transform: uppercase;
        color: black;
        padding: 0.5rem;
        border-radius: 5px;
        user-select: none;

        &:hover {
          background-color: #F5F5F5;
        }

        &.active {
          font-weight: 600;
          color: #3f51b5;

          .material-design-icon {
            color: #3f51b5;
          }
        }

        .material-design-icon {
          color: #757575;
          height: 1.6rem;
        }

        .label {
          font-size: $font-size-body-2;
        }
      }
    }
  }
}
</style>
