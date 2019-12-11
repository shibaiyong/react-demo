import React from 'react';
import Header from '../common/Header'
// import Login from '../logins/Login'
// import Register from '../logins/Register'
import { Router, Route } from 'react-router-dom'
class Mine extends React.Component {
  constructor(props) {
    super(props)
    this.headerstyle = {

    }
    this.isShowLogin = true
    this.state = {

    }

  }
  addDoThing() {

  }

  componentDidMount() {
    // console.log(this.props)
  }

  render() {

    return (
      <div className='mine'>
        <Header isShowLogin={this.isShowLogin} />
        {this.props.children}
      </div>
    )

  }
}

export default Mine
