import React from 'react';
import store from '../../redux/store'
import { connect } from 'react-redux'
class Login extends React.Component{
  constructor(props){
    super(props)
    this.headerstyle = {
    }
    this.state = {
    }
    
    this.unsubscribe=null
  }
  componentDidMount(){
  
  }
  componentWillUnmount(){
    //组件销毁之前取消监听，因为被销毁的组件无法响应store里面的数据变化。
    this.unsubscribe()
  }
  render(){
    return (
      <div className='login'>
        <ul>
          <li><label>UserName&nbsp;:&nbsp;&nbsp;</label><input type="text" name='user' className='shi-input' /></li>
          <li><label>Password&nbsp;:&nbsp;&nbsp;</label><input type="text" name='password' className='shi-input' /></li>
          <li><input type="submit" className='shi-input' value='登录' /></li>
        </ul>
        <div style={{width:'300px',height:'100px',border:'1px solid blue'}}>
          <input type='text' onBlur={this.props.changeText}/>
          {this.props.text}<br/>
          {this.props.num}
        </div>
      </div>
    )
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    num: state.num,
    text:state.text
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    changeNum: () => dispatch({ type:'changenum',num:num}),
    changeText: (e) =>{
      var val=e.target.value
      dispatch({ type:'changetext',text:val })
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Login)
