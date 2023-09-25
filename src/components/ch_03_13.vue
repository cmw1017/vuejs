<template>
    <ul>
        <button v-on:click="pushTodo">간식 먹기 추가</button>
        <!-- 만약 id가 없다면 index로 key를 할당할 수 있음 -->
        <li v-for="(todo, index) in todos" :key="index">
            <span :class="{ done: todo.done}"> {{todo.title}} </span>
        </li>
        
    </ul>
</template>

<script>

export default {
    name: 'ch_03_13',
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
            ]
        }
    },
    methods: {
      pushTodo () {
        //   아래와 같은 방식의 배열 추가는 반응성이 없음
        //   this.todos[3] = {title:'간식 먹기'}
        this.todos.push({title:'간식 먹기'})
      }  
    },
    
}
</script>

<style>
</style>