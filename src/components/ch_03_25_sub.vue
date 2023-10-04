<template>
    <div @click="updateMsg">{{ myMsg }} 클릭하면 글씨가 바뀝니다!!</div>
    <br/>
    <slot/>
    <br/>
    <slot name="slot2"/>
    <br/>
    <slot name="slot1"/>
</template>

<script>
export default {
    name: 'ch_03_25_sub',
    props: {
        myMsg: String
    },
    methods: {
        updateMsg() {
            if(this.myMsg === "HELLO")
                this.$emit('my-event', 'GOOD')
            else
                this.$emit('my-event', 'HELLO')
        }
    },
}
</script>