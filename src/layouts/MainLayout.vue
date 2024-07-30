<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <img
          alt="Smartlead logo"
          src="~assets/smartlead-logo.svg"
          class="q-ml-md"
        >
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list class="q-mt-md">
        <q-item
          v-for="(item, index) in NUMBER_OF_QUESTIONS"
          :key="`question-item-${index}`"

          :to="`/question-${item}`"

          clickable
        >
          Question {{ item }}
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// vue
import { defineComponent, reactive, toRefs } from 'vue';

const NUMBER_OF_QUESTIONS = 4;

export default defineComponent({
  name: 'MainLayout',

  setup () {
    // state
    const state = reactive({
      leftDrawerOpen: false,
    });

    // methods
    const toggleLeftDrawer = () => {
      state.leftDrawerOpen = !state.leftDrawerOpen;
    };

    return {
      // state
      ...toRefs(state),

      // methods
      toggleLeftDrawer,

      // hard coded constants
      NUMBER_OF_QUESTIONS,
    }
  }
})
</script>
