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
      <Header/>
        Detail 的 url 参数是： {this.props.location.query.id}--{this.props.location.query.name}
        <Footer/>
      </div>
      
    )
  }
}

export default Detail