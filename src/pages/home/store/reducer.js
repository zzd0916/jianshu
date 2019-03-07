import { fromJS } from 'immutable'
import * as constants from './actionTypes'
/**
 *  immutable.js  让对象变成不可变immutable对象
 *  */

const defaultState = fromJS({
  topicList:[],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    "articlePage": action.nextPage,
  })
}

export default (preState = defaultState, action) => {

  switch (action.type){
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(preState, action)
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(preState, action)
    case constants.CHANGE_SCROLL_SHOW:
      return preState.set('showScroll', action.showScroll)
    default: 
      return preState
    
  }
}