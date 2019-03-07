import React , { PureComponent } from 'react'
import { connect } from 'react-redux'

import {
  TopicWrapper,
  TopicItem,
} from '../style'
class Topic extends PureComponent {
  

  getTopicList(){
    const { list } = this.props
    if(list){
      let items = [];
      list.forEach((item ) => {
        items.push(
          <TopicItem key={item.get('id')}>
            <img 
                className="topic-pic" 
                src={item.get('imgUrl')} 
                alt=""
            />
            {item.get('title')}
          </TopicItem>
        )
      })
      return items
    }else{
      return null
    }
  }
  render() {
    return (
      <TopicWrapper>
        {this.getTopicList()}
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(['home','topicList'])
})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, null)(Topic)