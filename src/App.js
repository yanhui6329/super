import React, { Component } from 'react';
import './stylesheets/Apps.scss';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import {Home,List,Mine,Cars,NotFound} from './components/pages/index';
import NavBar from './components/commons/NavBar'
class App extends Component {
  
  // exact 是完全匹配，不写此属性‘/’都会匹配到
  // Switch 匹配一个
  // Redirect 重定向 只要路由没有匹配到就去重定向 
  // react没有像vue那样提供路由表 路由在哪里用就在哪里写 但可以自己配置路由表
  // App不是一个路由组件，不会像Home，List，等的路由组件上this上含有属性history location等
  // 所以要包裹一个withRouter 可以将一个不是路由组件的组件拥有路由组件相关的api
  renderFooter () {
  	if ( this.props.location.pathname !== '/mine' ) {
  		return <NavBar/>
  	}
  }
  render() {
    return (
      <div className="App">
      <Switch>
        {
          this.props.routes.map(item=>(<Route exact = {item.exact} path={item.parth} key = {item.id} component = {item.component}/> ))
        }
        <Redirect to='/not-found'/>
      </Switch>
      {this.renderFooter()}
      </div>
    );
  }
}


App.defaultProps = {
	
	routes: [
		{ id: 1, path: '/', component: Home, exact: true },
		{ id: 2, path: '/list', component: List },
		{ id: 3, path: '/cars', component: Cars },
		{ id: 4, path: '/mine', component: Mine },
		{ id: 5, path: '/not-found', component: NotFound }
	]
	
}
export default withRouter(App);
