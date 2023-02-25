import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import colors from '@/shared/config/colors'
import { custom } from '@/app/providers/vuetify/iconset/custom'

const dexTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.blue[5],
    secondary: colors.gray[18],
    error: colors.red[5],
    info: colors.purple[5],
    success: colors.green[5],
    warning: colors.yellow[5],
    'gray-18': colors.gray[18],
    'gray-20': colors.gray[20],
  },
}

export const defaults = {
  global: {
  },
  VBtn: {
    variant: 'flat',
    color: 'primary',
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

export const icons = {
  defaultSet: 'mdi',
  sets: {
    mdi,
    custom,
  },
  aliases: {
    ...aliases,
    user: 'mdi-account-circle-outline',
    swap: 'mdi-swap-horizontal',
  },
}

export const vuetifyConfig = {
  defaults,
  theme,
  icons,
}

export const vuetify = createVuetify(vuetifyConfig)
