<template>
    <h1> ch_03_16 실습 (이벤트 핸들러))</h1>
    <ul>
        <!-- 만약 id가 없다면 index로 key를 할당할 수 있음 -->
        <li v-for="(todo, index) in todos" 
            :key="index" 
            :class="'item-'+(index+1)"
            @click="clickMethod1(todo.title, $event); clickMethod2()">
            <span> {{todo.title}} </span>
        </li>
        
    </ul>
</template>

<script>

export default {
    name: 'ch_03_16',
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
      clickMethod1 (title, event) {
          console.log('click 1')
          console.log(title)
          console.log(event.currentTarget.className)
      },
      clickMethod2 () {
          console.log('click 2')
      }
    },
    
}
</script>

<style>
</style>