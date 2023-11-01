<!-- State removed -->
<script setup>
  import ChildComponent from './components/Child.vue'
</script>

<template>
    <p>Counter: {{this.$store.state.count }}</p>
    <button @click="this.$store.commit('decreaseCount')">Decrease</button>
    <button @click="this.$store.commit('increaseCount')">Increase</button>
    <button @click="this.$store.commit('doubleCount')">Double</button>

    <ChildComponent/>
</template>