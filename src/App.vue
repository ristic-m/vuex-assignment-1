<script>
    export default {
        data() {
            return {
            count: 0
            };
        },
        methods: {
            increaseCount() {
              this.count++;
            },
            decreaseCount() {
              this.count--;
            },
            doubleCount() {
              this.count*=2
            }
        }
    };

</script>

<template>
    <p>Counter: {{ count }}</p>
    <button @click="decreaseCount">Decrease</button>
    <button @click="increaseCount">Increase</button>
    <button @click="doubleCount">Double</button>
</template>