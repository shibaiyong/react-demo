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
<<<<<<< HEAD
        Detail 的 url 参数是： {this.props.location.query.id}--{this.props.location.query.name}
=======
        Detail 的 url 参数是： {this.props.params.id}
>>>>>>> 42ef54ca3d29952917e4f8e65f0a3bf69f01a6aa
      </div>
    )
  }
}

export default Detail