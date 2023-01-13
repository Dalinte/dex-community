<template>
  <div class="main-header">
    <img src="@/app/assets/images/logo.svg" alt="logo">
    <router-link to="exchange">Exchange</router-link>
    <router-link to="liquidity">Liquidity</router-link>
    <p id="menu-activator-mining">Mining</p>
    <v-menu activator="#menu-activator-mining">
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <p id="menu-activator-developer">Developer</p>
    <v-menu activator="#menu-activator-developer">
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-icon icon="$user" size="x-large"></v-icon>
    <div class="bg-gray-20 user-wallet">
      <span class="online"></span>
      <span>BSC</span>
      <v-btn color="secondary">Connect to a wallet</v-btn>
    </div>
    <v-icon icon="custom:custom-collapse" size="x-large"></v-icon>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header",
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
})
</script>

<style scoped>
  .main-header {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    padding-bottom: 60px;
    justify-content: start;
    grid-gap: 0 48px;
    /*color: white;*/
  }

  .user-wallet {
    border-radius: 100px;
    padding-left: 20px;
  }

  .online {
    width: 6px;
    height: 6px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
    margin-right: 4px;
  }
</style>
