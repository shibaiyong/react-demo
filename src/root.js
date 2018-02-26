import './static/style/common.css'
import './static/style/index.css'

import ReactDom from 'react-dom'
import React from 'react'
import {Router, Route, browserHistory} from 'react-router'

import IndexCom from './components/index/Index.js'
import Detail from './components/details/Detail.js'
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
        <Route path='/detail/:id' component={Detail}></Route>
      </Router>
    )
  }
}

ReactDom.render(<Root />,document.getElementById('root'))