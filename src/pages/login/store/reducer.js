import { fromJS } from 'immutable'
import * as constants from './actionTypes'
/**
 *  immutable.js  让对象变成不可变immutable对象
 *  */


const defaultState = fromJS({
  isLogin: false
})

export default (preState = defaultState, action) => {

  switch (action.type){
    case constants.CHANGE_LOGIN: 
      return preState.set('isLogin', action.value)

    case constants.LOGOUT: 
      return preState.set('isLogin', action.value)
    default: 
      return preState
    
  }
}