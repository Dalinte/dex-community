import { createApp } from 'vue'

import App from '@/app/Index.vue'

import { router, store, vuetify } from '@/app/providers'

export const app = createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
