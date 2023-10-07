<template>
  <section class="about">
    <div>
      <h1>예제 모음집</h1>
      <router-link to="ch_02_03" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_02_03
        </h2>
      </router-link>
      <router-link to="ch_02_05" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_02_05
        </h2>
      </router-link>
      <router-link to="ch_03_05" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_03_05
        </h2>
      </router-link>
      <router-link to="ch_03_11_12" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_03_11_12
        </h2>
      </router-link>
      <router-link to="ch_03_13" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_03_13
        </h2>
      </router-link>
      <router-link to="ch_03_15" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_03_15
        </h2>
      </router-link>
      <router-link to="ch_03_16" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_03_16
        </h2>
      </router-link>
      <router-link to="ch_03_25" custom v-slot="{ navigate }">
        <h2 @click="navigate" @keypress.enter="navigate" role="link">
          ch_03_25
        </h2>
      </router-link>
      <router-view />
    </div>
  </section>
</template>