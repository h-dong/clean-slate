<template>
  <div>
    <span>Focus page</span>
    <ul class="mdc-list">
      <TodoDefault v-for="todo in todos" :key="todo.id"></TodoDefault>
    </ul>
    <button @click="addNewTodo">Add</button>
  </div>
</template>

<script>
import { FIRESTORE } from '@/firebase';
import { mapState } from 'vuex';
import TodoDefault from '@/components/TodoDefault';

export default {
  components: {
    TodoDefault,
  },
  computed: {
    ...mapState('Login', {
      user: state => state.User,
    }),
    ...mapState('Todos', {
      todos: state => state.Todos,
    }),
  },
  methods: {
    addNewTodo() {
      const newTodo = {
        id: 1 + this.todos.length,
        title: 'A new todo',
        description: 'A not very interesting description',
        date: new Date(),
      };

      const uid = this.user.uid;

      console.log(uid);

      const docRef = FIRESTORE.collection('users').doc(uid);

      docRef.onSnapshot(doc => {
        console.log('Current data: ', doc.data());
      });

      docRef
        .get()
        .then(doc => {
          console.log(
            'Document successfully written! Document written with ID:',
            doc.data(),
          );

          newTodo.timestamp = FIRESTORE.FieldValue.serverTimestamp();

          docRef.set(
            {
              todos: [...doc.data().todos, newTodo],
            },
            { merge: true },
          );

          // doc.data().tags.push('test2');
        })
        .catch(error => {
          console.error('Error writing document: ', error);
        });

      this.$store.dispatch('Todos/ADD', newTodo);
    },
  },
};
</script>

<style lang="stylus" scoped>
ul {
  padding: 0;
}

button {
  width: 100px;
  height: 50px;
  background: white;
}
</style>
