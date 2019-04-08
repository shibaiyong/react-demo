import React from 'react';
import store from '../../redux/store'
import action from '../../redux/actions'
class Register extends React.Component{
  constructor(props){
    super(props)
    this.headerstyle = {
      
    }
    this.state = {
      num:store.getState().num,
      text:store.getState().text
    }
    this.changeText=this.changeText.bind(this)
    this.changeNum=this.changeNum.bind(this)
    this.unsubscribe=null
  }
  addDoThing(){
      
  }

  changeNum(){
    action.changeNum();
  }
  changeText(e){
    var val=e.target.value;
    action.changeText(val);
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        num:store.getState().num,
        text:store.getState().text
      })
      //同步方式修改状态
      
      // this.setState(function (prevState, props) {
      //   return { num:store.getState().num}
      // })
    })
  }
  componentWillUnmount(){
    //组件销毁之前取消监听，因为被销毁的组件无法响应store里面的数据变化。
    //this.unsubscribe()
  }
  render(){
    return (
      <div className='login'>
        <ul>
          <li><label>User Name&nbsp;:&nbsp;&nbsp;</label><input type="text" name='user' className='shi-input' /></li>
          <li><label>Password&nbsp;:&nbsp;&nbsp;</label><input type="text" name='password' className='shi-input' /></li>
          <li><input type="submit" className='shi-input' value='注册'/></li>
        </ul>
        <div style={{width:'300px',height:'100px',border:'1px solid red'}}>
          <button onClick={this.changeNum}>num++</button>
          {this.state.text}<br/>
          {this.state.num}
        </div>
      </div>
    )
  }
}

export default Register
