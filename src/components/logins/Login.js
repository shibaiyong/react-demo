import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props)
    this.headerstyle = {
      
    }
    this.state = {

    }
  }
  componentDidMount(){

  }
  render(){
    return (
      <div className='login'>
        <ul>
          <li><label>UserName&nbsp;:&nbsp;&nbsp;</label><input type="text" name='user' className='shi-input' /></li>
          <li><label>Password&nbsp;:&nbsp;&nbsp;</label><input type="text" name='password' className='shi-input' /></li>
          <li><input type="submit" className='shi-input' value='登录' /></li>
        </ul>
      </div>
    )
  }
}

export default Login
