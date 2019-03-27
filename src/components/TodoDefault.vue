<template>
  <li>
    <div class="todo-body">
      <div class="checkbox">
        <CheckboxMarkedCircle v-if="done" @click="toggleDone"/>
        <CheckboxBlankCircleOutline v-else @click="toggleDone"/>
      </div>
      <div class="wrapper">
        <span class="title">{{todo.title}}</span>
        <div class="tags">
          <small class="tag">Personal</small>
          <small class="tag">ASAP</small>
        </div>
      </div>
      <button @click="toggleControlVisibility">
        <DotsHorizontal/>
      </button>
    </div>
    <div class="todo-controls" :class="{ 'show-controls': controlsVisible }">
      <div class="icon-button" @click="toggleControlVisibility">
        <Close/>
        <span class="label">Close</span>
      </div>
      <div class="icon-button" @click="onDelete">
        <Delete/>
        <span class="label">Delete</span>
      </div>
      <div class="icon-button">
        <Pencil/>
        <span class="label">Edit</span>
      </div>
    </div>
  </li>
</template>

<script>
import CheckboxBlankCircleOutline from 'vue-material-design-icons/CheckboxBlankCircleOutline';
import CheckboxMarkedCircle from 'vue-material-design-icons/CheckboxMarkedCircle';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal';
import Close from 'vue-material-design-icons/Close';
import Pencil from 'vue-material-design-icons/Pencil';
import Delete from 'vue-material-design-icons/Delete';

export default {
  components: {
    CheckboxBlankCircleOutline,
    CheckboxMarkedCircle,
    DotsHorizontal,
    Close,
    Pencil,
    Delete,
  },
  props: ['todo'],
  data() {
    return {
      done: false,
      controlsVisible: false,
    };
  },
  methods: {
    toggleDone() {
      this.done = !this.done;
    },
    toggleControlVisibility() {
      this.controlsVisible = !this.controlsVisible;
    },
    onDelete(event) {
      this.$emit('delete', this.todo);
    },
  },
};
</script>


<style lang="stylus" scoped>
@import '../styles.styl';

li {
  .todo-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    list-style: none;

    .checkbox {
      width: 3rem;
    }

    .wrapper {
      position: relative;
      width: calc(100% - 6rem);
      text-align: left;
      padding: 0.5rem;

      .title {
      }

      .tags {
        display: flex;

        .tag {
          padding-right: 0.5rem;
        }
      }
    }

    button {
      width: 3rem;
    }
  }

  .todo-controls {
    height: 0;
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease;

    .icon-button {
      display: none;
      flex-flow: column;

      .material-design-icon {
        height: 25px;
      }

      span.label {
        font-size: $font-size-caption;
      }
    }
  }

  .show-controls {
    height: 3.25rem;
    opacity: 1;

    .icon-button {
      display: flex;
    }
  }
}
</style>
