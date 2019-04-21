
import './index.scss'
import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
// 无状态组件
const NavItem = ({ info }) => { // 参数 从props解构
	let { icon, title, path } = info // 解构
	return (
		<NavLink activeClassName = {'abc'} exact to = {path}>
			<i className = {`fa fa-${icon}`}></i>
			<span>{title}</span>
		</NavLink>
	)
}
class NavBar extends Component {
	render () {
		let { navs } = this.props
		return (
			<header className = "app-nav-bar">
				{
					navs.map(item => {
						return <NavItem info = {item} key = {item.id} />
					})
				}	
			</header>
		)
	}
	
}

NavBar.defaultProps = {
	navs: [
		{id: 1, title: '首页', icon: 'home', path: '/'},
		{id: 2, title: '列表', icon: 'list', path: '/list'},
		{id: 3, title: '购物车', icon: 'opencart', path: '/cars'},
		{id: 4, title: '我的', icon: 'user-circle-o', path: '/mine'}
	]
}

export default NavBar
