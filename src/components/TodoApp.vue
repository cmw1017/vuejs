<template>
  <div>
    <todo-item />
    <todo-creator />

    <button @click="createTodo">클릭</button>
  </div>
</template>

<script>
import cryptoRandomString from 'crypto-random-string'
import TodoCreator from "./TodoCreator.vue"
import TodoItem from "./TodoItem.vue"

export default {
  components: {
    TodoCreator,
    TodoItem,
  },
  data() {
    return {
      todos: []
    }
  },
  created() {
      const todoVar = {
          todos: []
      }
      const objString = JSON.stringify(todoVar);
      localStorage.setItem('todo-app', objString)
  },
  methods: {
      createTodo() {
          const newTodo = {
              id: cryptoRandomString({ length: 10 }),
              title: "타이틀",
              createdAt: new Date(),
              updatedAt: new Date(),
              done: false
          }
          const todoString = localStorage.getItem('todo-app')
          const todoObj = JSON.parse(todoString);
          this.todos.push(newTodo)
          console.log(this.todos)

          todoObj.todos.push(newTodo)
          const objString = JSON.stringify(todoObj);
          localStorage.setItem('todo-app', objString)
          
      }
  },
};
</script>
