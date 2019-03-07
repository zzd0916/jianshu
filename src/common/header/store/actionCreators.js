import * as constants from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeHeaderList = (data) =>({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUSED
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})


export const getHotKeyList = ()=>{
  return (dispatch) => {
    axios.get('/api/headerList.json',{})
      .then( (res) => {
        const data = res.data
        if(data.success){
          dispatch(changeHeaderList(data.data))
        }
      }).catch((err) => {
        console.log(err)
      })
  }
}

export const mouseEnter = ()=>({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = ()=> ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page)=> ({
  type: constants.CHANGE_PAGE,
  page: page
})