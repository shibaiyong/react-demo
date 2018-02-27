import React from 'react'

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
        Detail 的 url 参数是： {this.props.location.query.id}--{this.props.location.query.name}
      </div>
    )
  }
}

export default Detail