import React from 'react'

class App extends React.Component {
  constructor (props){
      super (props)
  }
  componentDidMount(){
    //console.log(this.props.match);
  }
  render(){
    return (
      <div className="rootContainer">
        {this.props.children}
      </div>
    )
  }
  }
export default App