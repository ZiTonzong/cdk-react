import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Thumbnail from '../../../assets/img/image_8.png'

class LeftList extends Component {
	render() {
		return (
			<section className="left-list">
				<div className="left-list-nav">
					<div className="left-list-nav-left">
						<NavLink
							activeClassName="left-list-nav-active"
							to="/timeline/recommend?sort=popular"
						>
							热门
						</NavLink>
						<span className="left-list-nav-left-split">|</span>
						<NavLink
							activeClassName="left-list-nav-active"
							to="/timeline/recommend?sort=newest"
						>
							最新
						</NavLink>
						<span className="left-list-nav-left-split">|</span>
						<NavLink
							activeClassName="left-list-nav-active"
							to="/timeline/recommend?sort=comment"
						>
							评论
						</NavLink>
					</div>
					<div className="left-list-nav-right">
						<NavLink
							activeClassName="left-list-nav-active"
							to="/timeline/recommend?sort=popular"
						>
							本周最热
						</NavLink>
						<span className="left-list-nav-right-split">.</span>
						<NavLink
							activeClassName="left-list-nav-active"
							to="/timeline/recommend?sort=newest"
						>
							本月最热
						</NavLink>
						<span className="left-list-nav-right-split">.</span>
						<NavLink
							activeClassName="left-list-nav-active"
							to="/timeline/recommend?sort=comment"
						>
							历史最热
						</NavLink>
					</div>
				</div>
				<div>
					<div className="left-list-item">
						<div>
							<Link to="/article">
								<div className="left-list-item-detail">
									<span className="hot">热</span>
									<span className="left-list-item-split">.</span>
									<span className="purple">专栏</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">郭东东</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">2月前</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">面试</span>
								</div>
								<h3>
									中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)
								</h3>
							</Link>
							<div className="left-list-item-action">
								<button className="left-list-item-action-button">
									<span className="icon icon-good"></span>
									3808
								</button>
								<button className="left-list-item-action-button">
									<span className="icon icon-comment"></span>
									365
								</button>
							</div>
						</div>
						<img src={Thumbnail} alt="缩略图" />
					</div>
					<div className="left-list-item">
						<div>
							<Link to="/article">
								<div className="left-list-item-detail">
									<span className="hot">热</span>
									<span className="left-list-item-split">.</span>
									<span className="purple">专栏</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">郭东东</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">2月前</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">面试</span>
								</div>
								<h3>
									中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)
								</h3>
							</Link>
							<div className="left-list-item-action">
								<button className="left-list-item-action-button">
									<span className="icon icon-good"></span>
									3808
								</button>
								<button className="left-list-item-action-button">
									<span className="icon icon-comment"></span>
									365
								</button>
							</div>
						</div>
						<img src={Thumbnail} alt="缩略图" />
					</div>
					<div className="left-list-item">
						<div>
							<Link to="/article">
								<div className="left-list-item-detail">
									<span className="hot">热</span>
									<span className="left-list-item-split">.</span>
									<span className="purple">专栏</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">郭东东</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">2月前</span>
									<span className="left-list-item-split">.</span>
									<span className="hot">面试</span>
								</div>
								<h3>
									中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)
								</h3>
							</Link>
							<div className="left-list-item-action">
								<button className="left-list-item-action-button">
									<span className="icon icon-good"></span>
									3808
								</button>
								<button className="left-list-item-action-button">
									<span className="icon icon-comment"></span>
									365
								</button>
							</div>
						</div>
						<img src={Thumbnail} alt="缩略图" />
					</div>
				</div>
			</section>
		)
	}
}

export default LeftList
