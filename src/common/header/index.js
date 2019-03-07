import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import  { actionCreators } from './store'
import  { actionCreators as loginActionCreators } from '../../pages/login/store'
import { 
  HeaderWrapper, 
  Logo , 
  Nav,
  NavItem,
  SearchWrap,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchItem,
  SearchInfoList,
} from './style' 

class Header extends PureComponent{
  // constructor(props){
  //   super(props)
  //   // do something
  // }

  render(){
    const { focused,list, handleInputFocus, handleInputBlur, isLogin } = this.props;
    return (
      <HeaderWrapper className="header">
        <Link to="/">
          <Logo  />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            isLogin ? <NavItem onClick = {this.props.logout} className="right">退出</NavItem> : 
            <Link to='/login'><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right"><i className="iconfont word">&#xe636;</i></NavItem>
          <SearchWrap>
            <CSSTransition 
              in = {focused}
              timeout = {200}
              classNames = "slide"
            >
              <NavSearch  
                className = {focused ? "focused" : ""}
                onFocus = { () => handleInputFocus(list)}  
                onBlur = {handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={ focused ? "focused iconfont zoom" : "iconfont zoom" }>&#xe617;</i>
            {this.getSearchListArea()}
          </SearchWrap>
          <Addition>
            <Link to='/write'>
              <Button className="writing"><i className="iconfont write">&#xe624;</i>写文章</Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }

  getSearchListArea = () => {
    const { 
      focused, 
      list, 
      page, 
      totalPage, 
      mouseIn, 
      handleMouseEnter, 
      handleMouseLeave, 
      handleChangePage
    } = this.props;
    // 将immutable 对象转化为js对象
    const newList = list.toJS()
    const pageList = []
    const pageSize = 10 //分页大小
    // 初始化的时候newList是空，渲染key值会报错
    if(newList.length){
      for (let i = (page-1) * pageSize ; i< (page * pageSize); i++){
        if(newList[i]){
          pageList.push(<SearchItem key={newList[i]} > {newList[i]} </SearchItem>)
        }
      }
    }

    if(focused || mouseIn){

      return (
        <SearchInfo 
          onMouseEnter = { handleMouseEnter }
          onMouseLeave = { handleMouseLeave }
        >
          <SearchInfoTitle>
            热门搜索 
            <SearchInfoSwitch onClick = { () => { handleChangePage(page, totalPage, this.spin)}}>
              <i ref={(icon) => {this.spin = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
     
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']), // 等价于 focused: state.get("header").get("focused")
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
    isLogin: state.getIn(['login','isLogin']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      (list.size === 0) && dispatch(actionCreators.getHotKeyList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^\d]/ig,"");
      if( originAngle ){
        originAngle = parseInt(originAngle, 10)
      }else{
        originAngle = 0
      }
      
      spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
      let curPage = 1
      if(page +1 > totalPage){
        curPage = 1;
      }else{
        curPage = page + 1
      }
      dispatch(actionCreators.changePage(curPage))
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}


// mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Header)