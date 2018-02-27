import React from 'react'
import { browserHistory } from 'react-router'

class Body extends React.Component {
  constructor (props){
      super (props)
      this.state={
          bodyContent:'Hello Word!!!',
          willToDoThings:[],
          completeThings:[]
      }
  }

  componentWillReceiveProps(nextProps,nextContent){
      //console.log(this.props)  //可以获得最新的prop
      //console.log(nextProps)   //同上
      this.setState({
          willToDoThings:nextProps.Things
      })
  }
  linkTo(id,name){
    browserHistory.push({pathname:'/detail',query:{id:id,name:name}})
  }
  deleteThing(index){
    var len = this.state.willToDoThings.length;
    for(var i = 0; i < len; i++){
      if(i == index){
        let val = this.state.willToDoThings.splice(i,1);//返回值是别删除的项
        console.log(val)
        this.setState({
          willToDoThings:this.state.willToDoThings
        })
      }
    }
  }
  completeThing(index){
    var len = this.state.willToDoThings.length;
    for(var i = 0; i < len; i++){
      if(i == index){
        let val = this.state.willToDoThings.slice(i,i+1);//返回值是别删除的项
        this.state.completeThings.push(val)
        this.setState({
          completeThing:this.state.completeThing
        })

        this.deleteThing(index);
      }
    }
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
                <li key={index}>
                <span>{index}--{item}</span>&nbsp;&nbsp;
                <span onClick={this.completeThing.bind(this,index)}>complete</span>&nbsp;&nbsp;
                <span onClick={this.deleteThing.bind(this,index)}>delete</span>&nbsp;&nbsp;
                <span onClick={this.linkTo.bind(this,index,item)}>detail</span></li>
              )
            })
          }
        </ul> 
        <h5>已完成</h5>
        <ul>
          {
            this.state.completeThings.map( (item,index) => {
              return (
                <li key={index}>{index}--{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Body