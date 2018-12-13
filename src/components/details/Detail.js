import React from 'react'

import Header from '../common/Header.js'
import Footer from '../common/Footer.js'

class Detail extends React.Component {
  constructor (props){
    super (props)
      this.state={    
    }
  }
  componentDidMount(){
      
  }
  render (){
    return (
      <div className='detail'>
        <p>(window.open打开新窗口获取参数的方法：window.location.search)</p>
        <p>Detail 的 url 参数是： {this.props.location.state.id}--{this.props.location.state.name}</p>
        <Footer/>
      </div>
      
    )
  }
}

export default Detail