import React from 'react';
import Header from '../common/Header'
// import Login from '../logins/Login'
// import Register from '../logins/Register'
import {Router, Route} from 'react-router-dom'
class Mine extends React.Component{
  constructor(props){
    super(props)
    this.headerstyle = {
      
    }
    this.isShowLogin = true
    this.state = {
      
    }
    
  }
  addDoThing(){
    
  }
  
  componentDidMount(){
    
  }

  render(){

    return (
      <div className='mine'>
        <Header isShowLogin={ this.isShowLogin } />
        {/* <Route path='/mine/login' component={Login}></Route>
        <Route path='/mine/register' component={Register}></Route> */}
        {this.props.children}
      </div>
    )

  }
}

export default Mine
