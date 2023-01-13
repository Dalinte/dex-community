<template>
  <v-app>
    <v-layout style="z-index: 0">
      <v-main class="page">
        <v-container>
          <Header/>
          <router-view/>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "@/widgets/header/ui/Header.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header
  },
})
</script>
