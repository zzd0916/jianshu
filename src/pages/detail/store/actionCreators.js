
import axios from 'axios'
import * as constants from './actionTypes'
// import { fromJS } from 'immutable'

const changeDetailData = (title, content) =>({
  type: constants.CHANGE_DETAIL_DATA,
  title,
  content,
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
      .then((res) => {
        let result = res.data
        if(result.success){
          dispatch(changeDetailData( result.data.title, result.data.content))
        }
        
      })
  }
}