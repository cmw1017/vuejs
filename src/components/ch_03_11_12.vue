<template>
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
