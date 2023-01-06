<template>
  <v-btn @click="onClick">{{label}}</v-btn>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';
import {IButtonSize} from '@/shared/ui/Button/interface'

export default defineComponent({
  name: 'my-button',

  props: {
    label: {
      type: String,
    },
    size: {
      type: String as PropType<IButtonSize>,
      default: 'medium' as IButtonSize,
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
