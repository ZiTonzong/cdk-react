import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
			<header>
				<div className="header-container">
					<img className="header-container-logo" alt="Logo" src={Logo} />
					<ul className="header-container-nav">
						<li>
							<NavLink
								activeClassName="header-container-nav-active"
								to="/timeline/recommend"
							>
								首页
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName="header-container-nav-active" to="/pins">
								沸点
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName="header-container-nav-active"
								to="topics"
							>
								话题
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName="header-container-nav-active"
								to="/books"
							>
								小册
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName="header-container-nav-active"
								to="/events"
							>
								活动
							</NavLink>
						</li>
					</ul>
					<ul className="header-container-right">
						<li className="header-container-search">
							<form>
								<input placeholder="搜索更新啦"></input>
								<img className="icon-search" src={Search} alt="搜索" />
							</form>
						</li>
						<li className="header-container-add">
							<div className="header-container-add-group">
								<button className="add-article">写文章</button>
								<div>
									<button className="add-more"></button>
								</div>
							</div>
						</li>
						<Link to="" className="header-container-notice">
							<i className="icon icon-notice"></i>
							<span>5.2K</span>
						</Link>
						<Link to="" className="header-container-user">
							<img
								src="https://leancloud-gold-cdn.xitu.io/GBwwQOuUmqYmWWnSp5EjY3HTouKn5fAd0Ly5XHkO?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
								alt="头像"
							/>
						</Link>
					</ul>
				</div>
			</header>
		)
  }
}

export default Header