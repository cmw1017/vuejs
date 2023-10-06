<template>
  <div>
    <todo-item 
      v-for="todo in todos"
      :key="todo.id"
      :todo_props="todo"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
    />

    <hr/>
    <todo-creator @create-todo="createTodo" />
  </div>
</template>

<script>
import cryptoRandomString from "crypto-random-string";
import TodoCreator from "./TodoCreator.vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoCreator,
    TodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.initDB()
  },
  methods: {
    initDB() {
      const todoString = localStorage.getItem("todo-app");
      const todoObj = JSON.parse(todoString);

      if(todoObj) {
        this.todos = todoObj
      } else {
        const todosString = JSON.stringify(this.todos);
        localStorage.setItem("todo-app", todosString);
      }
    },
    createTodo(title) {
      const newTodo = {
        id: cryptoRandomString({ length: 10 }),
        title,
        createdAt: new Date(),
        updatedAt: new Date(),
        done: false,
      };

      this.todos.push(newTodo);
      const todosString = JSON.stringify(this.todos);
      localStorage.setItem("todo-app", todosString);
    },
    updateTodo() {
      console.log('updateTodo!')
    },
    deleteTodo() {
      console.log('deleteTodo!')
    }
  },
};
</script>
