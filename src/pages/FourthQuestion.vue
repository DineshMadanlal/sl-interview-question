<template>
  <q-page class="questions-page">
    <p class="question-text">
      Find the smallest number from the given input
    </p>

    <input v-model="inputValue" />

    <q-btn
      no-caps
      unelevated
      label="Run"
      color="primary"
    />
  </q-page>
</template>

<script setup>
// vue
import { ref } from "vue";

const inputValue = ref('');
</script>

<style lang="scss" scoped>

</style>
