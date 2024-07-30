<template>
  <q-page class="questions-page">
    <p class="question-text">
      Create a reusable input component
    </p>

    <InputBox v-model="searchInputValue" />

    <p class="q-mt-md">
      Parent Component Value >> {{ searchInputValue }}
    </p>
  </q-page>
</template>

<script setup>
// vue
import { ref } from "vue";

// Component
import InputBox from 'components/InputBox.vue';

// ref
const searchInputValue = ref('Smartlead');
</script>

<style lang="scss" scoped>
.questions-page {
  padding: 16px;

  .question-text {
    margin-bottom: 24px;
    font-weight: 500;

    font-size: 16px;
  }
}
</style>
