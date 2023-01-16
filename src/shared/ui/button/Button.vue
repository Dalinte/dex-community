<template>
  <v-btn @click="onClick">{{label}}</v-btn>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';

export default defineComponent({
  name: 'my-button',

  props: {
    label: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      }
    }
  },
})
</script>
