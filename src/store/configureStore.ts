import { legacy_createStore as createStore } from 'redux'
import { rootReducer } from './AppStore'

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore
