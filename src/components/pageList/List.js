import React from 'react'

import { withRouter } from 'react-router-dom'

import Header from '../common/Header.js'
import Footer from '../common/Footer.js'

class List extends React.Component{
  constructor(props){
    super(props)
    this.listData=[
        {id:1,name:'hahah111'},
        {id:2,name:'hahah222'},
        {id:3,name:'hahah333'},
        {id:4,name:'hahah444'},
        {id:5,name:'hahah555'},
        {id:6,name:'hahah666'},
        {id:7,name:'hahah777'}
    ]
  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  componentDidMount(){
    console.log('编程式导航 传过来的参数:' + this.props.location.state.data);
  }
  linkTo(id,name){
    //参考列表页的编程式导航的传参方式
  }
  render(){
    return (
        <div className="list">
            <Header/>
            <ul className="list-constainer">
            {
                this.listData.map((item,index)=>{
                    return (
                        <li key={index} onClick={this.linkTo.bind(this,item.id,item.name)}>
                            {item.id}-------------------------------------{item.name}
                        </li>
                    )
                })
            }
            </ul>
            <Footer/>
        </div>
      
    )
  }
}


export default List