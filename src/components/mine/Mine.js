import React from 'react';
import Header from '../common/Header'

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
        { this.props.children }
        
      </div>
    )

  }
}

export default Mine
