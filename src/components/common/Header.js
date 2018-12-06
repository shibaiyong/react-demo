import React from 'react';
import { browserHistory,Link } from 'react-router'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.headerstyle={
           
        }
        this.state={
            headerContent:'ToDoList',
            willDoThing:[],
        }
        this.addDoThing=this.addDoThing.bind(this)
    }
    addDoThing(e){
        if(e.keyCode==13){
          this.state.willDoThing.push(e.target.value)
          //异步
          this.setState({
              willDoTing:this.state.willDoThing
          })
          //同步
          // this.setState((prevState,prop)=>({
          //   willDoTing:prevState
          // }))
          this.props.outputData(this.state.willDoThing);
          e.target.value='';
        }
        
    }
    linkTo(path){
      browserHistory.push('/mine/'+path)
    }
    componentDidMount(){

    }
    render(){
    var loginInfo = this.props.isShowLogin ? (<div className="login-info"><span onClick={ this.linkTo.bind(this,'login')}>login</span>&nbsp;&nbsp;
    <span onClick={ this.linkTo.bind(this,'register') }>register</span>&nbsp;&nbsp;</div>) : ''
        return (
            <div className='header'>
                <header>
                    <label>{this.state.headerContent}</label>
                    <Link to='tabs'>tabs</Link>
                    <input onKeyUp={this.addDoThing} style={this.headerstyle} placeholder='To Do List' type='text'/>
                </header>
                { loginInfo }
            </div>
        )
    }
}

export default Header
