import './static/style/common.css'
import './static/style/index.css'

import ReactDom from 'react-dom'
import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import IndexCom from './components/index/Index.js'
import Detail from './components/details/Detail.js'
import Mine from './components/mine/Mine.js'
import Login from './components/logins/Login'
import Register from './components/logins/Register'
class Root extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={IndexCom}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/mine' component={Mine}>
          <IndexRoute component={Login}/> 
          <Route path='/mine/login' component={Login}></Route>
          <Route path='/mine/register' component={Register}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDom.render(<Root />,document.getElementById('root'))