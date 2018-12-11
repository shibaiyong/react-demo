  import React from 'react'
  import {Router, Route, Redirect,BrowserRouter,Switch,withRouter} from 'react-router-dom'
  import IndexCom from '../components/index/Index.js'
  import Detail from '../components/details/Detail.js'
  import Mine from '../components/mine/Mine.js'
  import List from '../components/pageList/List.js'
  import Login from '../components/logins/Login'
  import Register from '../components/logins/Register'
  import Tabs from '../components/tabs/TabUI'
  import Broadcast from '../components/common/Broadcast'

  // const Root = () => (
  //   <Router history={browserHistory}>
  //     <Route path="/" component={IndexCom}></Route>
  //     <Route path='/detail' component={Detail}></Route>
  //     <Route path='/tabs' component={Tabs}></Route>
  //     <Route path='/list' component={List}></Route>
  //     <Route path='/broadcast' component={Broadcast}></Route>
  //     <Route path='/mine' component={Mine}>
  //       <IndexRoute component={Login}/> 
  //       <Route path='/mine/login' component={Login}></Route>
  //       <Route path='/mine/register' component={Register}></Route>
  //     </Route>
  //   </Router>
  // )
  const Root = () => (
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/" component={IndexCom}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route path='/tabs' component={Tabs}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/broadcast' component={Broadcast}></Route>
        <Route path='/mine' component={Mine}>
          <Route path='/mine/login' component={Login}></Route>
          <Route path='/mine/register' component={Register}></Route>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  )

  export default Root

  
