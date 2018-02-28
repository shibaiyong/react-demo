import React from 'react';
import Header from '../common/Header'
import store from '../../redux/store'
import action from '../../redux/actions'
class Mine extends React.Component{
  constructor(props){
    super(props)
    this.headerstyle = {
      
    }
    this.isShowLogin = true
    this.state = {
      num:store.getState().num,
      text:store.getState().text
    }
    this.changeText=this.changeText.bind(this)
    this.changeNum=this.changeNum.bind(this)
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
    store.subscribe(()=>{
      this.setState({
        num:store.getState().num,
        text:store.getState().text
      })
    })
  }

  render(){

    return (
      <div className='mine'>
        <Header isShowLogin={ this.isShowLogin } />
        { this.props.children }
        <div style={{width:'300px',height:'100px',border:'1px solid red'}}>
          <button onClick={this.changeNum}>num++</button>
          {this.state.text}<br/>
          {this.state.num}
        </div>
        <div style={{width:'300px',height:'100px',border:'1px solid blue'}}>
        <input type='text' onBlur={this.changeText}/>
        {this.state.text}<br/>
          {this.state.num}
        </div>
      </div>
    )

  }
}

export default Mine
