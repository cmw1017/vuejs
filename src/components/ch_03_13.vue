<template>
    <h1> ch_03_13 실습 (v-for)</h1>
    <p> v-for의 리스트에 반응성을 넣으려면 push, pop 등의 배열 함수를 사용하여 값을 넣어야함</p>
    <p> 배열 요소(array[i] 방식)로 직접 할당하는 방식은 반응성을 갖지 않음(Vue3에서는 반응성을 갖을 수 있게 수정됨)</p>
    <button v-on:click="pushTodo">간식 먹기 추가</button>
    <ul>
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
        // 아래와 같은 방식의 배열 추가는 반응성이 없음(Vue3에서는 가능)
        // this.todos[3] = {title:'간식 먹기'}
        this.todos.push({title:'간식 먹기'})
      }  
    },
    
}
</script>

<style>
</style>