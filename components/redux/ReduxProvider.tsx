'use client'
import type { ReactNode } from 'react'

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'


interface ReduxProviderProps {
  children: ReactNode
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
