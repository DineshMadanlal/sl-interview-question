<template>
  <q-page class="questions-page">
    <p class="question-text">
      Filter users by name. Allow users to select checkboxes next to each name, then display the count of selected users.
    </p>
    <div
      class="users-grid"
    >
      <q-input
        dense
        outlined

        v-model="searchInput"

        class="search-input"
        placeholder="Search here"
      />

      <div
        class="flex no-wrap items-center"

        v-for="(data, index) of usersArray"
        :key="`user-data-${index}`"
      >
        <input type="checkbox" />

        <p class="name-text">
          {{ data.name }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// vue
import { ref } from "vue";

const searchInput = ref('');

// hard coded array of JSON
const usersArray = [
  {"id": 1, "name": "John"},
  {"id": 2, "name": "Alice"},
  {"id": 3, "name": "Bob"},
  {"id": 4, "name": "Emily"},
  {"id": 5, "name": "Michael"},
  {"id": 6, "name": "Sophia"},
  {"id": 7, "name": "David"},
  {"id": 8, "name": "Emma"},
  {"id": 9, "name": "Daniel"},
  {"id": 10, "name": "Olivia"},
  {"id": 11, "name": "Matthew"},
  {"id": 12, "name": "Ava"},
  {"id": 13, "name": "James"},
  {"id": 14, "name": "Ella"},
  {"id": 15, "name": "William"},
  {"id": 16, "name": "Mia"},
  {"id": 17, "name": "Benjamin"},
  {"id": 18, "name": "Grace"},
  {"id": 19, "name": "Liam"},
  {"id": 20, "name": "Charlotte"},
  {"id": 21, "name": "Ryan"},
  {"id": 22, "name": "Isabella"},
  {"id": 23, "name": "Ethan"},
  {"id": 24, "name": "Sophie"},
  {"id": 25, "name": "Lucas"}
];
</script>

<style lang="scss" scoped>
.questions-page {
  padding: 16px;

  .question-text {
    margin-bottom: 24px;
    font-weight: 500;

    font-size: 20px;
  }

  .users-grid {
    display: grid;
    grid-row-gap: 6px;

    .search-input {
      max-width: 400px;
    }

    .name-text {
      margin: 0;
      margin-left: 8px;
    }
  }
}
</style>
