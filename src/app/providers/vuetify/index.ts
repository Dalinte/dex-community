import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const defaults = {
  global: {
    ripple: false,
  },
  VBtn: {
    variant: 'tonal',
  },
}

export const vuetifyConfig = {
  defaults,
}

export const vuetify = createVuetify(vuetifyConfig)
