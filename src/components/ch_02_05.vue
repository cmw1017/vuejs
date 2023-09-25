<template>
    <ul>
        <!-- v-bind => :, v-on => @ 으로 표기 -->
        <ch_02_05_sub v-for="todo in todos" :key="todo.id" :todo_props="todo"></ch_02_05_sub>
    </ul>
</template>

<script>
import ch_02_05_sub from './ch_02_05_sub.vue'

export default {
  name: 'ch_02_05',
  data() {
    return{
        todos: [
            {
                id: '1',
                title: '아침 먹기',
                done: false
            },
            {
                id: '2',
                title: '점심 먹기',
                done: false},
            {
                id: '3',
                title: '저녁 먹기',
                done: false},
            {
                id: '4',
                title: '간식 먹기',
                done: false},
            {
                id: '5',
                title: '야식 먹기',
                done: false}
        ]
    }
  },
  components: {
    ch_02_05_sub
  }
}
</script>

<style>
</style>