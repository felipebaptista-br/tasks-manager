'use client'

import { Provider } from 'react-redux'
import store from '@/redux/store'
import Header from '@/components/header'

import './globals.css'

export default function RootLayout({ children }) {

  return (
    <Provider store={store}>
      <html lang="pt-br">
        <body>
          <Header />
          <main className='container'>
            {children}
          </main>
        </body>
      </html>
    </Provider>
  )
}
