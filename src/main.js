import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './styles/global.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'marketplace',
    themes: {
      marketplace: {
        dark: false,
        colors: {
          primary: '#175cd3',
          secondary: '#0f766e',
          accent: '#f59e0b',
          surface: '#ffffff',
          background: '#f7f8fb',
        },
      },
    },
  },
})

createApp(App).use(router).use(vuetify).mount('#app')
