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
      browserHistory.push(path)
    }
    componentDidMount(){

    }
    render(){
    let loginInfo = this.props.isShowLogin ? (<div className="login-info"><span onClick={ this.linkTo.bind(this,'/mine/login')}>Login</span>&nbsp;&nbsp;
    <span onClick={ this.linkTo.bind(this,'/mine/register') }>Register</span>&nbsp;&nbsp;</div>) : '';
    let goLogin = this.props.isShowLogin ? '' : <Link to='/mine'>去登录</Link>;
        return (
            <div className='header'>
                { goLogin }
                <header>
                    <label onClick={this.linkTo.bind(this,'/')}>{this.state.headerContent}</label>
                    <input onKeyUp={this.addDoThing} style={this.headerstyle} placeholder='To Do List' type='text'/>
                </header>
                { loginInfo }
            </div>
        )
    }
}

export default Header
