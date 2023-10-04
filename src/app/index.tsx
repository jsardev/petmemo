import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { Routing } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
