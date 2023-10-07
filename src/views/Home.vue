<template>
  <section class="home">
    <div>
      <h1>VUE Home Page!</h1>

      <h2 @click="$router.push('/about')">About</h2>

      <router-link
        to="/practices/ch_02_03"
        class="to-home"
        custom
        v-slot="{ navigate }"
      >
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          VUE API Document Practice
        </h2>
      </router-link>

      <router-link to="/todos/all" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          Todo App
        </h2>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/scss/_style.scss";
</style>