  import React from 'react'
  import {Route, Redirect,BrowserRouter,Switch,withRouter} from 'react-router-dom'
  import Provider from 'react-redux'; // react和redux连接的桥梁，就是这个Provider
  // import Store from '../redux/index.js';

  import IndexCom from '../components/index/Index.js'
  import Detail from '../components/details/Detail.js'
  import Mine from '../components/mine/Mine.js'
  import List from '../components/pageList/List.js'
  import Login from '../components/logins/Login'
  import Register from '../components/logins/Register'
  import Tabs from '../components/tabs/TabUI'
  import Broadcast from '../components/common/Broadcast'
  import App from '../components/app/APP'
  // react-router 4.0之前的路由写法
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

  //react-router 4.x 新的写法
  //render 方法渲染组件时,props要显式的传入组件中;这里的props分别代表 history location match;这样在根组件中就可以
  const Router = ({component: Component, children}) => (
    <Route  
      render={props => (
        <Component {...props}><Switch>{children}</Switch></Component>
      )}
    />
  );
  const Root = () => (
    <BrowserRouter>
      <Router component={App}>
        <Route exact path="/" component={IndexCom}></Route>
        <Route path='/detail' component={Detail}></Route>
        <Route exact path='/tabs' component={Tabs}></Route>
        <Route exact path='/list' component={List}></Route>
        <Route path='/broadcast' component={Broadcast}></Route>
        <Router component={Mine}>
          <Route exact path='/mine/login' component={Login}></Route>
          <Route path='/mine/register' component={Register}></Route> 
        </Router>
      </Router>
    </BrowserRouter>
  )

  // 相当于 下面这种写法
  //<App>
  //  <Route exact path="/" component={IndexCom}></Route>
  //  <Route path='/detail' component={Detail}></Route>
  //  <Route exact path='/tabs/:id' component={Tabs}></Route>
  //  <Route exact path='/list' component={List}></Route>
  //  <Route path='/broadcast' component={Broadcast}></Route>
  //  <Route path='/mine' component={Mine}/>
  //  <Mine>
  //    <Route exact path='/mine/login' component={Login}></Route>
  //    <Route path='/mine/register' component={Register}></Route>
  //  </Mine>
  //</App>

  export default Root         

  
