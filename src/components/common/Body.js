import React from 'react'

import { browserHistory } from 'react-router'

class Body extends React.Component {
  constructor (props){
      super (props)
      this.state={
          bodyContent:'Hello Word!!!',
          willToDoThings:[]
      }
  }

  componentWillReceiveProps(nextProps,nextContent){
      //console.log(this.props)  //可以获得最新的prop
      //console.log(nextProps)   //同上
      this.setState({
          willToDoThings:nextProps.Things
      })
  }
  linkTo(id){
    browserHistory.push('/detail/'+id)
  }

  componentDidMount(){
      
  }
  render (){
    return (
      <div className='body'>
        <h5>正在进行</h5>
        <ul>
          {
            this.state.willToDoThings.map((item,index)=>{
              return (
                <li key={index} onClick={this.linkTo.bind(this,index)}>{index}、{item}</li>
              )
            })
          }
        </ul> 
        <h5>已完成</h5>
      </div>
    )
  }
}

export default Body