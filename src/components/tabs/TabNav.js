import React from 'react'
import { list } from '_postcss@6.0.22@postcss';

class TabNav extends React.Component{
  constructor(props){
    super(props)
    this.nav={
      float:'left',
      padding:'0 15px'
    }
  }

  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  getTabs(){
    const {panels} = this.props;
    return React.Children.map(panels,(child)=>{
      return (
        <li style={this.nav}>
          {child.props.tabcontent}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className='tabpane'>
        {this.getTabs()}
      </ul>
    )
  }
}

export default TabNav