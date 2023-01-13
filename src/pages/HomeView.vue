<template>
  <v-app>
    <v-layout style="z-index: 0">
      <v-main class="page">
        <v-container>
          <Header/>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "@/widgets/header/ui/Header.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    Header
  },
})
</script>

<style lang="scss">
  @use '@/app/assets/styles/colors.scss';

  .page {
    //background-color: colors.$gray22;
  }
</style>
