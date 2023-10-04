<template>
    <h1> ch_03_25~26 실습 ($emit, slot)</h1>
    <ch_03_25_sub :my-msg="message" @my-event="updateMessage">
        <h1> Vue3에서는 slot을 아무태그에나 넣을 수 없고, Template 태그에만 넣을 수 있으며 v-slot으로 사용해야함</h1>
        <p> 이름이 지정되어있지 않은 SLOT입니다. </p>
        <template v-slot:slot1>
            <p> SLOT1이름의 SLOT입니다. </p>
        </template>
        <template v-slot:slot2>
            <p> SLOT2이름의 SLOT입니다. </p>
        </template>
    </ch_03_25_sub>
    
</template>

<script>
import ch_03_25_sub from './ch_03_25_sub.vue'

export default {
    name: 'ch_03_25',
    data() {
        return {
            message: "HELLO"
        }
    },
    components : {
        ch_03_25_sub
    },
    methods: {
        updateMessage (value) {
            this.message = value
        }
    },
    
}
</script>