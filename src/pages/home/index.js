import React , { PureComponent } from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import {actionCreators} from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './style.js'
class Home extends PureComponent {

  handleScrollTop(){
    let speed = 10;
    let mile = window.scrollY;
    let timer = setInterval( () =>{
      speed += 40;
      if(mile <= speed){
        clearInterval(timer)
        window.scrollTo(0,0)
      }
      let fact =parseInt(mile - speed);
      window.scrollTo(0,fact)
    },10)

    
  }

  render() {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" /> 
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { showScroll ? <BackTop  onClick={this.handleScrollTop}>Top</BackTop> : null }
        
      </HomeWrapper>
    )
  }

  componentDidMount(){
   this.props.changeHomeData();
   this.bindEvent()
  }

  // 组件移除时销毁监听事件
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvent(){
    window.addEventListener('scroll' , this.props.changeScrollTopShow)
  }
  
}

const mapStateToProps = (state) =>({
  showScroll: state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
   const action = actionCreators.getHomeInfo();
   dispatch(action)
  },
  changeScrollTopShow(e){
    if(document.documentElement.scrollTop > 100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)