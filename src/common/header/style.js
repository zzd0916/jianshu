import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border: 1px solid #f0f0f0;
  z-index:1;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
    cursor:pointer;
  }
  &.active{
    color: #ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  color: #666;
  background: #eee;
  font-size: 14px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
  margin-left: 20px;
  &.focused {
    width: 240px;
  }
  &.slide-enter{ 
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  background: #fff;
`
export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
  .spin{
    display: block;
    font-size: 12px;
    float: left;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  
`
export const SearchItem = styled.a`
  display: block;
  float:left;
  margin: 0 10px 15px 0;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    background: orange;
    color: #fff;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg{
    color: #ec6149;
  }
  &.writing{
    color: #fff;
    background: #ec6149;
  }
`

export const SearchWrap = styled.div`
  float: left;
  position: relative;
  .zoom{
    position: absolute;
    right: 5px;
    font-size: 20px;
    bottom: 5px;
    cursor: pointer;
    width:30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }

`