<template>
  <h1> ch_03_11~12 실습 (v-if, v-show)</h1>
  <p> v-if는 해당 html 코드를 아예 삭제하는 것이고, v-show는 css 태그를 통해 안보이게만 하는것</p>
  <button v-on:click="toggleElement">Toggle</button>
  <div class="box red" v-if="toggle" v-on:click="toggleElement"></div>
  <div class="box blue" v-show="!toggle" v-on:click="toggleElement"></div>
</template>

<script>
export default {
  name: 'ch_03_11_12',
  data() {
    return{
      toggle: false
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
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}
.red{
    background-color: rosybrown;
}
.blue{
    background-color: royalblue;
}
</style>
