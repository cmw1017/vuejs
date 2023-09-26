<template>
  <h1> ch_02_03 실습 (v-on, v-bind, methods)</h1>
  <div class="box" v-bind:class="{active: toggle}" v-on:click="toggleElement">{{message}}</div>
  <button v-on:click="toggleElement">Toggle</button>
  <input type="text" v-model="message">
</template>

<script>
export default {
  name: 'ch_02_03',
  data() {
    return{
      toggle: false,
      message: ''
    }
  },
  methods: {
    toggleElement() {
      this.toggle = !this.toggle
    }
  }
}
</script>

<style>
.box{
  width: 150px;
  height: 150px;
  background: royalblue;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box.active {
  width: 400px;
  background: tomato;
}
</style>
