import { createStore, compose } from 'redux'
import rootReducer from './modules/rootReducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const getStore = () => {
  let enhancer = null
  if (
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV === 'development'
  ) {
    enhancer = compose(
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )

    return createStore(rootReducer, enhancer)
  }
  return createStore(rootReducer)
}

const store = getStore()

export default store
