import { fromJS } from 'immutable'
import * as constants from './actionTypes'
/**
 *  immutable.js  让对象变成不可变immutable对象
 *  */

const defaultState = fromJS({
  title: '',
  content:'',
})

const changeDetailData = (state, action) => {
  return state.merge({
    title: action.title,
    content: action.content
  })
}


export default (preState = defaultState, action) => {

  switch (action.type){
    case constants.CHANGE_DETAIL_DATA:
      return changeDetailData(preState,action)
    default: 
      return preState
    
  }
}