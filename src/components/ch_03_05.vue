<template>
    <ul>
        <li v-for="todo in computedTodos" :key="todo.id">
            <!-- v-bind => :, v-on => @ 으로 표기 -->
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done}"> {{todo.title}} </span>
        </li>
    </ul>
</template>

<script>

export default {
    name: 'ch_03_05',
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
                },
                {
                    title: '간식 먹기'
                },
                {
                    title: '야식 먹기'
                }
            ]
        }
    },
    computed: {
        computedTodos () {
            return this.todos.map((todo, index) => {
                // 아래와 같은 내용임
                // return Object.assign({}, todo, {
                //     id: index + 1,
                //     done: false
                // })
                return {
                    ...todo,
                    id: index + 1,
                    done: false
                }
            })
        }
        // computed 변수 중 data 선언하지 않은 변수들은 수정하려고 하면 오류가 발생함
        // ,
        // methods: {
        //     click_todo_list() {
        //         this.todo.done = !this.todo.done
        //     }
        // }
    }
}
</script>

<style>
</style>