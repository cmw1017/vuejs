<template>
    <li>
        <!-- v-bind => :, v-on => @ 으로 표기 -->
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done}" @click="click_todo_list"> {{todo.title}} </span>
    </li>
</template>


<script>
    export default {
        name: 'ch_02_05_sub',
        props: ['todo_props'],
        data() {
            return{
                todo: this.todo_props
            }
        },
        methods: {
            click_todo_list() {
                this.todo.done = !this.todo.done
            }
        }
        
    }
</script>

<style> 
    li span.done {
        text-decoration: line-through;
    }

    span {
        cursor: pointer;
    }
</style>