<template>
  <h1> ch_02_03 실습 (v-on, v-bind, methods)</h1>
  <ch_02_03/>

  <h1> ch_02_05 실습 (props)</h1>
  <ch_02_05/>

  <h1> ch_03_05 실습 (computed)</h1>
  <ch_03_05/>

  <h1> ch_03_11~12 실습 (v-if, v-show)</h1>
  <p> v-if는 해당 html 코드를 아예 삭제하는 것이고, v-show는 css 태그를 통해 안보이게만 하는것</p>
  <ch_03_11_12/>

  <h1> ch_03_13 실습 (v-for)</h1>
  <p> v-for의 리스트에 반응성을 넣으려면 push, pop 등의 배열 함수를 사용하여 값을 넣어야함</p>
  <p> 배열 요소(array[i] 방식)로 직접 할당하는 방식은 반응성을 갖지 않음</p>
  <ch_03_13/>

</template>

<script>
import ch_02_03 from './components/ch_02_03.vue'
import ch_02_05 from './components/ch_02_05.vue'
import ch_03_05 from './components/ch_03_05.vue'
import ch_03_11_12 from './components/ch_03_11_12.vue'
import ch_03_13 from './components/ch_03_13.vue'

export default {
  name: 'App',
  components: {
    ch_02_03,
    ch_02_05,
    ch_03_05,
    ch_03_11_12,
    ch_03_13
  }
}
</script>

<style>
</style>
