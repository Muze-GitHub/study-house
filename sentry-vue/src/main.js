import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import * as Sentry from '@sentry/vue'

const app = createApp(App)

Sentry.init({
  app,
  dsn: 'https://02c0d23ffe32fff8b62339ef8b24b56c@o4507411939328000.ingest.us.sentry.io/4509305383813120',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
})

app.mount('#app')
myUndefinedFunction()
