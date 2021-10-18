import React from 'react'
import './index.scss'
// import Loadable from 'react-loadable'
import { useHistory } from 'react-router-dom'

// const Loading = () => <div>Loading...</div>

// const Nav = Loadable({
// 	loader: () => import('./components/Nav'),
// 	loading: Loading,
// })

// const LeftList = Loadable({
// 	loader: () => import('./components/LeftList'),
// 	loading: Loading,
// })

// const RightRecommend = Loadable({
// 	loader: () => import('./components/RightRecommend'),
// 	loading: Loading,
// })

function TimeLine() {
	const history = useHistory()

	const goCascaderDemo = () => {
		history.push('/cascader-demo')
	}

	// const backTop = () => {
	// 	console.log(document)
	// }

	const goButtonDemo = () => {
		history.push('/button-demo')
	}

	const goPagerDemo = () => {
		history.push('/pager-demo')
	}

	const goInputDemo = () => {
		history.push('/input-demo')
	}

	const goSpinDemo = () => {
		history.push('/spin-demo')
	}

	const gotoPage = (path) => {
		history.push(path)
	}

	return (
		<div className="timeline">
			<div className="timeline-container">
				<div className="timeline__sub-title">组件展示</div>
				<ul className="timeline__ul">
					<li onClick={() => gotoPage('/cascader-demo')}>级联组件 Demo</li>
					<li onClick={() => gotoPage('/button-demo')}>Button 组件 Demo</li>
					<li onClick={() => gotoPage('/pager-demo')}>Pager 组件 Demo</li>
					<li onClick={() => gotoPage('/input-demo')}>Input 组件 Demo</li>
					<li onClick={() => gotoPage('/spin-demo')}>Spin 组件 Demo</li>
					<li onClick={() => gotoPage('/antDesign/table-demo')}>
						(AntDesign) Table 组件 Demo
					</li>
					<li onClick={() => gotoPage('/antDesign/form-demo')}>
						(AntDesign) Form 组件 Demo
					</li>
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
