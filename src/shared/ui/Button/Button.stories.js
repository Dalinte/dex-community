import { withDesign } from 'storybook-addon-designs'

import MyButton from './Button.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
  },
  decorators: [withDesign],
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<MyButton v-bind="args" />',
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  variant: 'tonal',
  label: 'Button',
}

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/pI5vPaid9qzYuYKnTdFVAO/DEX---Decentralized-Exchange-Platform-(Community)?node-id=1897%3A13586&t=AKANnhSkxvf8QDld-4',
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
