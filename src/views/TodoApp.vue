<template>
  <div class="todo-app">
    <div class="todo-app__actions">
      <div class="filters">
        <router-link to="all" custom v-slot="{ navigate }">
          <button :class="{selected: $route.params.id === 'all'}" @click="navigate" @keypress.enter="navigate" role="link"> 모든 항목 ({{ total }}) </button>
        </router-link>
        <router-link to="active" custom v-slot="{ navigate }">
          <button :class="{selected: $route.params.id === 'active'}" @click="navigate" @keypress.enter="navigate" role="link"> 해야 할 항목 ({{ activeCount }}) </button>
        </router-link>
        <router-link to="completed" custom v-slot="{ navigate }">
          <button :class="{selected: $route.params.id === 'completed'}" @click="navigate" @keypress.enter="navigate" role="link"> 완료된 항목 ({{ completedCount }}) </button>
        </router-link>
      </div>

      <div class="actions clearfix">
        <!-- v-model은 input의 값과 allDone이라는 Computed 값이 양방향 바인딩이 되도록하는 것 -->
        <div class="float--left">
           <label>
             <input 
              v-model="allDone" 
              type="checkbox"/>
              <span class="icon"><i class="material-icons">done_all</i></span>
           </label>
        </div>
        <div class="float--right clearfix">
          <button 
            class="btn float--left"
            @click="scrollToTop">
            <i class="material-icons">expand_less</i>
          </button>
          <button 
            class="btn float--left"
            @click="scrollToBottom">
            <i class="material-icons">expand_more</i>
          </button>
          <button 
            class="btn btn--danger float--left" 
            @click="clearCompleted">
            <i class="material-icons">delete_sweep</i>
          </button>
        </div>
      </div>
    </div>

    <div class="todo-app__list">
      <!-- 
      v-for는 반복하는 중에 :key에 유니크한 값을 넣어줘야함
      강의에는 :todo로 넘겨주나 여기에서는 :todo_props로 넘겨줌(자식 컴포넌트에서 todo로 하면 변수 미정의 오류가 발생함)
      @update-todo, @delete-todo는 해당 todoItem 컴포넌트에서 $emit으로 보낸 이벤트를 받는것(이름이 이벤트 종류를 가림)
      -->
      <todo-item
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo_props="todo"
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </div>
    
    <todo-creator 
      class="todo-app__creator" 
      @create-todo="createTodo"/>
    
  </div>
</template>

<script>
import cryptoRandomString from "crypto-random-string";
import _find from "lodash/find";
import _assign from "lodash/assign";
import _findIndex from "lodash/findIndex";
import _forEachRight from "lodash/forEachRight";
import scrollTo from 'scroll-to'
import TodoCreator from "../components/TodoCreator.vue";
import TodoItem from "../components/TodoItem.vue";

export default {
  components: {
    TodoCreator,
    TodoItem,
  },
  data() {
    return {
      todos: []
    };
  },
  computed: {
    filteredTodos() {
      switch (this.$route.params.id) {
        case "all":
        default:
          return this.todos;
        case "active": // 해야 할 항목
          return this.todos.filter((todo) => !todo.done);
        case "completed": // 완료된 항목
          return this.todos.filter((todo) => todo.done);
      }
    },
    total() {
      return this.todos.length;
    },
    activeCount() {
      return this.todos.filter((todo) => !todo.done).length;
    },
    completedCount() {
      return this.total - this.activeCount;
    },
    allDone: {
      get() {
        return this.total === this.completedCount && this.total > 0;
      },
      set(checked) {
        this.completeAll(checked);
      },
    },
  },
  created() {
    this.initDB();
  },
  methods: {
    initDB() {
      // DB에서 값을 가져옴
      const todoString = localStorage.getItem("todo-app");
      const todoObj = JSON.parse(todoString);

      // DB에 값이 없다면 안가져오고 새로 만듬
      if (todoObj) {
        this.todos = todoObj;
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

      // Create Client
      this.todos.push(newTodo);

      // Create DB
      const todosString = JSON.stringify(this.todos);
      localStorage.setItem("todo-app", todosString);
    },
    updateTodo(todo, value) {
      // Create Client(JavaScript 메소드 활용)
      // const foundTodo = this.todos.find((item=>item.id === todo.id))
      // Object.assign(foundTodo, value)

      // Create Client(lodash API)
      const foundTodo = _find(this.todos, { id: todo.id });
      _assign(foundTodo, value);

      // Create DB
      const todosString = JSON.stringify(this.todos);
      localStorage.setItem("todo-app", todosString);
    },
    deleteTodo(todo) {
      // Remove Client(lodash는 삭제에 반응성을 가지지 않으므로 Vue의 함수 사용)
      const foundIndex = _findIndex(this.todos, { id: todo.id });
      // this.$delete(this.todos, foundIndex) // Vue 2.0에서만 작동
      delete this.todos[foundIndex]; // Vue 3.0에서 사용
      this.todos.splice(foundIndex, 1); // Vue3의 Delete는 배열의 요소를 지워주지 않으므로 Splice 함수를 사용함

      // Remove DB
      const todosString = JSON.stringify(this.todos);
      localStorage.setItem("todo-app", todosString);
    },
    completeAll(checked) {
      // done Client
      this.todos.forEach((todo) => {
        todo.done = checked;
      });

      // done DB
      const todosString = JSON.stringify(this.todos);
      localStorage.setItem("todo-app", todosString);
    },
    clearCompleted() {
      // 인덱스를 앞에서 부터 삭제하면 인덱스 갱신에 의해 제대로 삭제되지 않을 수 있음
      // this.todos.forEach(todo => {
      //   if(todo.done) {
      //     this.deleteTodo(todo)
      //   }
      // })

      // javascrip 함수를 사용한 인덱스를 뒤에서부터 삭제
      // this.todos.reduce((list, todo, index) => {
      //   if(todo.done) {
      //     list.push(index)
      //   }
      //   return list
      // }, [])
      // .reverse()
      // .forEach(index => {
      //   this.deleteTodo(this.todos[index])
      // })

      // lodash를 사용한 API
      _forEachRight(this.todos, (todo) => {
        if (todo.done) {
          this.deleteTodo(todo);
        }
      });
    },
    scrollToTop () {
      scrollTo(0, 0, {
        ease: 'linear'
      })
    },
    scrollToBottom () {
      scrollTo(0, document.body.scrollHeight, {
        ease: 'linear'
      })
    }
  },
};
</script>

<style lang="scss">
  .filters button.selected{
    background: royalblue;
    color: white;
  }
</style>