import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom'
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
      this.props.history.push(path)
    }
    componentDidMount(){

    }
    render(){
    let loginInfo = this.props.isShowLogin ? (<div className="login-info"><NavLink to="/mine/login" activeStyle={{color:'red'}}>Login</NavLink>&nbsp;&nbsp;
    <NavLink to='/mine/register' activeStyle={{color:'red'}}>Register</NavLink>&nbsp;&nbsp;</div>) : '';
    let goLogin = this.props.isShowLogin ? '' : <a onClick={ this.linkTo.bind(this,'/mine/login')}>去登录</a>;
    
        return (
            <div className='header'>
                { goLogin }
                <header>
                    <label onClick={ this.linkTo.bind(this,'/')}>{this.state.headerContent}</label>
                    <input onKeyUp={this.addDoThing} style={this.headerstyle} placeholder='To Do List' type='text'/>
                </header>
                { loginInfo }
            </div>
        )
    }
}
//withRouter(Header) 实际是高阶组件创建方式:withRouter是一个函数，传入一个组件作为参数，对传入的组件进行二次包装组合，返回一个新的组件。这个新的组件就具有了一些新的属性和方法。
//不使用withRouter方法 不能在非路由页面通过路由API的方法 实现页面的跳转
export default withRouter( Header )
//export default Header
