import { createStore, combineReducers } from 'redux'
import { newsReducer, userReducer } from './reducer'

const rootReducer = combineReducers({ news: newsReducer, user: userReducer })
const configureStore = () => {
  return createStore(rootReducer)
}
export default configureStore
