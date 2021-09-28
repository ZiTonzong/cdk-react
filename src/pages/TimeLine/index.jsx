import React, { Component } from 'react'
import './index.scss'
import Loadable from 'react-loadable'
import { useHistory } from 'react-router-dom'

const Loading = () => <div>Loading...</div>

const Nav = Loadable({
	loader: () => import('./components/Nav'),
	loading: Loading,
})

const LeftList = Loadable({
	loader: () => import('./components/LeftList'),
	loading: Loading,
})

const RightRecommend = Loadable({
	loader: () => import('./components/RightRecommend'),
	loading: Loading,
})

function TimeLine() {
	const history = useHistory()

	const goCascaderDemo = () => {
		history.push('/cascader-demo')
	}

	const backTop = () => {
		console.log(document)
	}

	const goButtonDemo = () => {
		history.push('/button-demo')
	}

	return (
		<div className="timeline">
			<div className="timeline-container">
				<div className="timeline__sub-title">组件展示</div>
				<ul className="timeline__ul">
					<li onClick={goCascaderDemo}>级联组件 Demo</li>
					<li onClick={goButtonDemo}>Button 组件 Demo</li>
					<li>xx</li>
				</ul>
				{/* <Nav/> */}
				{/* <div className="timeline-container">
          <LeftList/>
          <RightRecommend/>
        </div>
        <button className="scroll-to-top" onClick={this.backTop}>返回顶部</button> */}
			</div>
		</div>
	)
}

export default TimeLine
