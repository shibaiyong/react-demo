import React from 'react';

class Register extends React.Component{
  constructor(props){
    super(props)
    this.headerstyle = {
      
    }
    this.state = {

    }
  }
  addDoThing(){
      
  }

  componentDidMount(){

  }
  render(){
    return (
      <div className='login'>
        <ul>
          <li><label>User Name&nbsp;:&nbsp;&nbsp;</label><input type="text" name='user' className='shi-input' /></li>
          <li><label>Password&nbsp;:&nbsp;&nbsp;</label><input type="text" name='password' className='shi-input' /></li>
          <li><input type="submit" className='shi-input' value='注册'/></li>
        </ul>
      </div>
    )
  }
}

export default Register
