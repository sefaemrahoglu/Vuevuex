<template>
  <div>
    <p class="counter-container">3 X : {{ getTripleCounter }}</p>
    <p class="counter-container">{{ stringCounter }}</p>
    <input type="text" v-model="value" />
    <p>{{ value }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // Getters
    ...mapGetters(["getTripleCounter", "stringCounter"]),
    value: {
      get() {
        return this.$store.getters.getValue;
      },
      set(value) {
        this.$store.dispatch("setValueData", value);
      }
    }
  }
  //// computed : mapGetters({ triple : 'getTripleCounter'})
};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
