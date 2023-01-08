<template>
  <v-app>
    <v-layout style="z-index: 0">
      <v-app-bar color="grey-lighten-2"></v-app-bar>
      <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
      <v-navigation-drawer color="grey-darken-2" permanent location="right"></v-navigation-drawer>
      <v-main>
        <v-btn>Primary</v-btn>
        <v-checkbox disabled label="Checkbox"></v-checkbox>
        <v-switch color="red" label="Switch" inset></v-switch>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
})
</script>
