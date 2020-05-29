<template>
  <div>
    <h6>methods</h6>
    <button class="btn btn-success" @click="incrementCounter">+ Arttır</button> &nbsp;
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button> &nbsp;
    <h6>Mutations</h6>
    <button class="btn btn-primary" @click="increaseCounter">+ Arttır</button> &nbsp;
    <button class="btn btn-warning" @click="decreaseCounter">- Azalt</button> &nbsp;
    <h6>Actions</h6>
    <button class="btn btn-info" @click="increment">+ Arttır</button> &nbsp;
    <button class="btn btn-success" @click="decrement">- Azalt</button> &nbsp;
    <h6>Actions Asenkron</h6>
    <button class="btn btn-danger" @click="incrementAsync">+ Arttır</button> &nbsp;
    <button class="btn btn-primary" @click="decrementAsync({time : 1000})">- Azalt</button> &nbsp;
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    incrementCounter() {
      //this.$emit("counterEvent", 1); normal componentsler arası iletişim
      //this.$store.state.counter++;  vuex ile iletişim
      this.$store.commit("updateCounter", 1); // mutations ile iletişim az kod
    },
    decrementCounter() {
      //this.$emit("counterEvent", -1);
      //this.$store.state.counter--;
      this.$store.commit("updateCounter", -1);
    },
    ...mapMutations(["increaseCounter", "decreaseCounter"]),
    ...mapActions(["increment", "decrementAsync"]),
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync", {time : 500} );
    }
  }
};
</script>

<style>
</style>
