import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify, ThemeDefinition } from 'vuetify'

// @ts-ignore
import colors from 'vuetify/lib/util/colors'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#0177FB',
    secondary: '#3B3C4E',
    error: '#FF6370',
    info: '#BB6BDA',
    success: '#53F3C3',
    warning: '#FFD95C',
  },
}

export const defaults = {
  global: {
  },
  VBtn: {
    variant: 'flat',
    color: 'primary',
  },
}

export const theme = {
  defaultTheme: 'myCustomLightTheme',
  themes: {
    myCustomLightTheme,
  },
}

export const vuetifyConfig = {
  defaults,
  theme,
}

export const vuetify = createVuetify(vuetifyConfig)
