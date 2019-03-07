import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index:0;
  position: absolute;
  left: 0;
  top: 56px;
  right: 0px;
  height: 100%;
  bottom: 0px;
  background: #eee;
`
export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  margin: 100px auto;
  background: #fff;
  padding-top: 50px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
`
export const Input = styled.input`
  display:block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  padding: 0 10px;
  color: #777;
`
export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  border-radius: 15px;
  margin: 10px auto;
  text-align: center;
  background: #3194d0;
  cursor: pointer;
`