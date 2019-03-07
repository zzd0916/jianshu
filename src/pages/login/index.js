import React , { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
class Login extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if(!isLogin){
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={ ( input) => this.account = input} />
            <Input placeholder='密码' type="password" ref={ ( input) => this.password = input} />
            <Button onClick={ () => this.props.handerLogin(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else{ 
      return <Redirect to='/' /> 
    }
  }
  
  componentDidMount() {
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login','isLogin'])
})

const mapDispatchToProps = (dispatch) => ({
  handerLogin(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.value,passwordElem.value))
  }
})

export default  connect(mapStateToProps, mapDispatchToProps)(Login)