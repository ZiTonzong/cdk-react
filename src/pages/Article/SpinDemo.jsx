import React, { Component } from 'react'
import './index.scss'
import Spin from '../../components/spin/Spin'

class SpinDemo extends Component {
	constructor() {
		super()
		this.state = {
			spinning1: true,
			spinning2: true
		}
	}

	// handleChange = (current) => {
	// 	console.log('current', current)
	// }

	// handleChange2 = (current) => {
	// 	this.setState({
	// 		current,
	// 	})
	// }

	render() {
		return (
			<div className="article">
				<div className="button-demo__container">
					<Spin />
				</div>
				<div className="button-demo__container">
					<Spin tip="loading" />
				</div>
				<div className="button-demo__container">
					<Spin spinning={this.state.spinning1} />
				</div>
				<div className="button-demo__container">
					<Spin spinning={this.state.spinning2} tip="loading..." size={30}>
						<div>Further details about the context of this element.</div>
					</Spin>
				</div>
			</div>
		)
	}
}

export default SpinDemo
