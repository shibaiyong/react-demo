import React from 'react'
import TabNav from './TabNav'
import TabContent from './TabContent'
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
    const {children}=this.props
    return <TabPane panels={children}></TabPane>
  }

  render(){
    return (
      <div>
        {this.renderTabNav()}
        {this.redderTabContent()}
      </div>
    )
  }

  componentDidMount(){
    React.Children.map(this.props.children,function(child){
      console.log(child)
    })

  }
}

export default Tab