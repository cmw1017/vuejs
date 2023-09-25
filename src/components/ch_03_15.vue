<template>
    <button v-on:click="pushTodo">간식 먹기 추가</button>
    <ul>
        <!-- 만약 id가 없다면 index로 key를 할당할 수 있음 -->
        <li v-for="(todo, index) in todos" :key="index">
            <span :class="{ done: todo.done}"> {{todo.title}} </span>
        </li>
    </ul>

    <button v-on:click="addEmail">이메일 추가</button>
    <ul>
        <!-- 만약 id가 없다면 index로 key를 할당할 수 있음, 배열이 아닌 객체는 중간에 key를 넣어줘야 함 -->
        <li v-for="(value, key, index) in person" :key="index">
            <span> {{value}} </span>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'ch_03_15',
    data() {
        return{
            todos: [
                {
                    title: '아침 먹기'
                },
                {
                    title: '점심 먹기'
                },
                {
                    title: '저녁 먹기'
                }
            ],
            person: {
                name: "person",
                age: 30
            }
        }
    },
    methods: {
      pushTodo () {
        this.todos[3] = {title:'간식 먹기'}
      },
      addEmail () {
          this.person.email = "cmw1017@naver.com"
      }
    },
    
}
</script>

<style>
</style>