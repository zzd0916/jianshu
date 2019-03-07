import React , { PureComponent } from 'react'
import {connect} from 'react-redux'

import {
  WriteWrapper
} from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriteWrapper>

      </WriteWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps,null)(Writer)