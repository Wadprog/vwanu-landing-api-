import { combineReducers } from 'redux'

import authentication from './auth'
import alerts from './alerts'
import testers from './testers'
// import account from './account';

export default combineReducers({
  authentication,
  alerts,
  testers,
  // account,
})
