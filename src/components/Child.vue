<!-- Example child component -->
<template>
  <div style="border:1px solid red">
    <h1>Child component that has access to the vuex store.</h1>
    <h2>Count: {{ this.$store.state.count }}</h2>
    <h2>Count (with getter): {{ this.$store.getters.getCount }}</h2>
    <button @click="this.$store.commit('increaseCount')">Increment from child component</button>
    <button @click="this.$store.commit('setSpecificValue',10)">Set specific value(in our case, 10)</button>
  </div>
</template>

<!-- methods from store are globally accessible from child at any level- no imports necessary -->
<!-- Docs I followed: https://vuex.vuejs.org/guide/#the-simplest-store -->