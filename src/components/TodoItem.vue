<template>
  <div 
    :class="{ done }"
    class="todo-item">
    <div v-if="isEditMode" class="item__inner item--edit">
      <!-- 
        ref는 script 부분에서 해당 요소를 가져오기 쉽게하기 위함
        @input은 값이 입력됬을 경우 editedTitle의 값을 변경해주기 위함
        @keypress는 이름 그대로 키가 눌렸을 경우 발생하는 이벤트 메소드를 설정
      -->
      <input 
        ref="titleInput"
        :value="editedTitle"
        type="text"
        @input="editedTitle = $event.target.value"
        @keypress.enter="editedTodo"
        @keypress.esc="offEditMode"
      >
      <!-- key를 구분해줘야 아래의 수정/삭제 버튼과 별개의 요소로 구분됨 -->
      <div class="item__actions">
        <button 
          class="btn btn--primary" 
          key="complete" 
          @click="editedTodo">
          <i class="material-icons">done</i>
          </button>
        <button 
          class="btn"
          key="cancle" 
          @click="offEditMode">
          <i class="material-icons">clear</i>
          </button>
      </div>
    </div>
    <div v-else class="item__inner item--normal">
      <label>
        <input 
          v-model="done" 
          type="checkbox" 
        />

        <span class="icon"><i class="material-icons">check</i></span>
      </label>
      <div class="item__title-wrap">
        <div class="item__title">
          {{ todo.title }}
        </div>
        <div class="item__date">
          {{ date }}
        </div>
      </div>
      <div class="item__actions">
        <button 
          class="btn"
          key="update" 
          @click="onEditMode">
          <i class="material-icons">edit</i>
          </button>
        <button 
          class="btn btn--danger"
          key="delete" 
          @click="deleteTodo">
          <i class="material-icons">delete</i>
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: {
    // 받는 props의 형식을 지정해줌
    todo_props: Object,
  },
  data() {
    return {
      todo: this.todo_props,
      isEditMode: false,
      editedTitle: ''
    };
  },
  computed: {
    done: {
      get() {
        return this.todo.done;
      },
      set(done) {
        this.updateTodo({
          done,
        });
      },
    },
    date() {
      const date = dayjs(this.todo.createdAt);
      const isSame = date.isSame(this.todo.updatedAt);

      if (isSame) {
        return date.format("YYYY년 MM월 DD일");
      } else {
        return `${date.format("YYYY년 MM월 DD일")} (edited)`;
      }
    },
  },
  methods: {
    editedTodo() {
      if(this.todo.title !== this.editedTitle) {
        this.updateTodo({
          title: this.editedTitle,
          updatedAt: new Date()
        })
      }

      this.offEditMode()
    },
    onEditMode() {
      this.isEditMode = true
      this.editedTitle = this.todo.title

      // v-if로 바인딩되는 요소를 정했기 때문에 위의 this.isEditMode를 바꾸면 바인딩되는 요소가 바뀌는 중이므로
      // focus할 요소를 찾지 못하는 경우가 발생할 수 있음, 따라서 $nectTick을 사용하면 요소가 바인딩되는것을 기다림
      this.$nextTick (() => {
        this.$refs.titleInput.focus()
      })
    },
    offEditMode() {
      this.isEditMode = false
    },
    updateTodo(value) {
      this.$emit("update-todo", this.todo, value);
    },
    deleteTodo() {
      this.$emit("delete-todo", this.todo);
    },
  },
};
</script>