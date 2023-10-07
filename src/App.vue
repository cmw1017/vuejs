<template>
  <router-link to="/" class="to-home" v-slot="{ navigate }">
    <h2 @click="navigate" @keypress.enter="navigate" role="link">
      <i class="material-icons">home</i>
    </h2>
  </router-link>

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>


<style lang="scss">
.to-home.router-link-exact-active {
  display: none;
}
</style>
