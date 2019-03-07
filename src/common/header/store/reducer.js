import * as constants from './actionTypes'
import { fromJS } from 'immutable'

/**
 *  immutable.js  让对象变成不可变immutable对象
 *  */

const defaultState = fromJS({
  focused : false,
  list:[],
  page: 1,
  totalPage:1,
  mouseIn: false
})

export default (preState = defaultState, action) => {

  switch (action.type){
    case constants.SEARCH_FOCUSED: 
      return preState.set("focused", true)
    
    case constants.SEARCH_BLUR: 
      return preState.set("focused", false)
    
    case constants.CHANGE_LIST: 
      // return preState.set("list",action.data).set("totalPage",action.totalPage)
      return preState.merge({
        list: action.data,
        totalPage:action.totalPage
      })
    
    case constants.MOUSE_ENTER: 
      return preState.set('mouseIn',true)
    
    case constants.MOUSE_LEAVE: 
      return preState.set('mouseIn',false)
    
    case constants.CHANGE_PAGE: 
      return preState.set('page', action.page)
    
    default: 
      return preState
    
  }


//   if(action.type === constants.SEARCH_FOCUSED){
//     //  let state = JSON.parse(JSON.stringify(preState))
//     // immutable对象的set方法， 会结合之前的immutable对象的值和设置的值，返回一个新的对象
//     //  state.focused = true
//      return preState.set("focused", true)
//   }

//   if(action.type === constants.SEARCH_BLUR){
//     // let state = JSON.parse(JSON.stringify(preState))
//     // state.focused = false
//     return preState.set("focused", false)
//  }

//  if(action.type === constants.CHANGE_LIST){
//   return preState.set("list",action.data)
// }

//   return preState
}