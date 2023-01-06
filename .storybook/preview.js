import { withVuetify } from 'storybook-addon-vuetify3/dist/decorators'
import {vuetifyConfig} from "../src/app/providers/vuetify/index";

export const globalTypes = {
  vuetify: vuetifyConfig
}

export const decorators = [
  withVuetify
]


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
