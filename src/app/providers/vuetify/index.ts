import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify, ThemeDefinition } from 'vuetify'

import colors from '@/app/assets/styles/colors';

const dexTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.blue[5],
    secondary: colors.gray[18],
    error: colors.red[5],
    info: colors.purple[5],
    success: colors.green[5],
    warning: colors.yellow[5],
  },
}

export const defaults = {
  global: {
  },
  VBtn: {
    variant: 'flat',
    color: 'primary',
    size: 'x-large'
  },
  VSwitch: {
    inset: true,
    color: 'primary',
  },
}

export const theme = {
  defaultTheme: 'dexTheme',
  themes: {
    dexTheme,
  },
}

export const vuetifyConfig = {
  defaults,
  theme,
}

export const vuetify = createVuetify(vuetifyConfig)
