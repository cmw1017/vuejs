<template>
  <h1> ch_02_03 실습 (v-on, v-bind, methods)</h1>
  <ch_02_03/>

  <h1> ch_02_05 실습 (props)</h1>
  <ch_02_05/>

  <h1> ch_03_05 실습 (computed)</h1>
  <p> computed 변수 중 data 선언하지 않은 변수들은 수정하려고 하면 오류가 발생함</p>
  <p> computed 변수는 기존에 선언된 변수에 추가로 계산을 하거나 속성을 추가하는 것이므로 computed를 통해 생성된 속성은 수정되지 않는 것으로 보임</p>
  <ch_03_05/>

  <h1> ch_03_11~12 실습 (v-if, v-show)</h1>
  <p> v-if는 해당 html 코드를 아예 삭제하는 것이고, v-show는 css 태그를 통해 안보이게만 하는것</p>
  <ch_03_11_12/>

  <h1> ch_03_13 실습 (v-for)</h1>
  <p> v-for의 리스트에 반응성을 넣으려면 push, pop 등의 배열 함수를 사용하여 값을 넣어야함</p>
  <p> 배열 요소(array[i] 방식)로 직접 할당하는 방식은 반응성을 갖지 않음(Vue3에서는 반응성을 갖을 수 있게 수정됨)</p>
  <ch_03_13/>

  <h1> ch_03_15 실습</h1>
  <p> Vue3에서는 set을 통한 수정을 하지 않고, 데이터의 추가 또는 삭제도 감지할 수 있다고 함</p>
  <ch_03_15/>
</template>

<script>
import ch_02_03 from './components/ch_02_03.vue'
import ch_02_05 from './components/ch_02_05.vue'
import ch_03_05 from './components/ch_03_05.vue'
import ch_03_11_12 from './components/ch_03_11_12.vue'
import ch_03_13 from './components/ch_03_13.vue'
import ch_03_15 from './components/ch_03_15.vue'

export default {
  name: 'App',
  components: {
    ch_02_03,
    ch_02_05,
    ch_03_05,
    ch_03_11_12,
    ch_03_13,
    ch_03_15
  }
}
</script>

<style>
</style>
