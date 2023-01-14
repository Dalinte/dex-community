<template>
  <div class="wrap-content">
    <section class="wrap-content__left">
      <slot name="left"></slot>
    </section>
    <section class="wrap-content__right">
      <slot name="right"></slot>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "WrapContent"
})
</script>

<style scoped lang='scss'>
  .wrap-content {
    display: grid;
    grid-template-columns: 1fr 525px;
  }
</style>
