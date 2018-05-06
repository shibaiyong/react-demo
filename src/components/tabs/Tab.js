import React from 'react'
import TabNav from './TabNav'

class Tab extends React.Component{
  constructor(props){
    super(props)

  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  renderTabNav(){
    const {children}=this.props
    return <TabNav panels={children}></TabNav>
  }

  renderTabContent(){

  }

  render(){
    return (
      <div>
        {this.renderTabNav()}
      </div>
    )
  }

  componentDidMount(){
    console.log(this.props);
    React.Children.map(this.props.children,function(child){
      console.log(child)
    })

  }
}

export default Tab