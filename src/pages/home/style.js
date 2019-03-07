import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin : 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
 margin: 0 0 0 15px;
 padding: 30px 0 0 0;
 width: 625px;
 float: left;
 .banner-img{
   height: 270px;
   width: 100%;
 }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
  padding: 30px 0 0 0;
`
export const TopicWrapper = styled.div`
 overflow: hidden;
 padding: 20px 0 10px 0;
 margin-left: -18px;
 border-bottom:  1px solid #dcdcdc;
`
export const TopicItem = styled.div`
 float: left;
 color: #f7f7f7;
 font-size: 14px;
 height: 32px;
 margin-left: 18px;
 margin-bottom: 18px;
 padding-right: 10px;
 line-height: 32px;
 color: #000;
 border: 1px solid #dcdcdc;
 border-radius: 4px;
 .topic-pic{
   display: block;
   float: left;
   width: 32px;
   height: 32px;
   margin-right: 10px;
 }
`
export const ListItem = styled.div`
 overflow: hidden;
 padding: 20px 0;
 border-bottom: 1px solid #dcdcdc;
 .pic{
   display: block;
   width: 125px;
   height: 100px;
   float: right;
   border-radius: 10px;
 }
`
export const ListInfo = styled.div`
 width: 500px;
 float: left;
 .title{
   font-size: 18px;
   line-height: 27px;
   font-weight: bold;
   color: #333;
 }
 .desc{
   font-size: 13px;
   line-height: 24px;
   color: #999;
 }
`
export const RecommendWrapper = styled.div`
 margin: 30px 0;
 width: 280px;
`
export const RecommendItem = styled.div`
 width: 280px;
 height: 50px;
 background: url( ${(props) => props.imgUrl});
 background-size: 100% 100%;
`

export const WriteWrapper = styled.div`
 width: 278px;
 border: 1px solid #dcdcdc;
 border-radius: 3px;
 height: 300px;
 text-algin: center;
`
export const LoadMore = styled.div`
 width: 100%;
 height: 40px;
 line-height: 40px;
 margin: 30px 0;
 background: #a5a5a5;
 text-align: center;
 border-radius: 20px;
 cursor: pointer;
 color: #fff;
`
export const BackTop = styled.div`
 position: fixed;
 right: 100px;
 bottom: 100px;
 width: 60px;
 height: 60px;
 line-height: 60px;
 text-align: center;
 background: #fff;
 color: #333;
 font-size: 18px;
 border: 1px solid #dedede;
 cursor: pointer;
 &:hover{
   background: orange;
   color: #fff;
   border: 1px solid orange;
 }
`