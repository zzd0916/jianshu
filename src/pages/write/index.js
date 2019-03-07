import React , { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  WriteWrapper,
} from './style'
class Write extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(isLogin){
      return (
       <WriteWrapper>写文章</WriteWrapper>
      )
    } else{ 
      return <Redirect to='/login' /> 
    }
  }
  
  componentDidMount() {
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login','isLogin'])
})


export default  connect(mapStateToProps, null)(Write)