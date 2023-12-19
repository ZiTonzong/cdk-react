import React, { Component } from 'react'
import './index.scss'
import Pager from '../../components/pager/Pager'

class PagerDemo extends Component {
	constructor() {
		super()
		this.state = {
			current: 20
		}
	}

	handleChange = (current) => {
		console.log('current', current)
	}

	handleChange2 = (current) => {
		this.setState({
			current
		})
	}

	render() {
		return (
			<div className="article">
				<div className="button-demo__container">
					<Pager total={5} onChange={(current) => this.handleChange(current)} />
				</div>
				<div className="button-demo__container">
					<Pager
						total={400}
						onChange={(current) => this.handleChange(current)}
					/>
				</div>
				<div className="button-demo__container">
					<Pager
						total={400}
						size="small"
						onChange={(current) => this.handleChange(current)}
					/>
				</div>
				<div className="button-demo__container">
					<Pager
						total={400}
						simple={true}
						onChange={(current) => this.handleChange(current)}
					/>
				</div>
				<div className="button-demo__container">
					<Pager
						total={400}
						current={this.state.current}
						onChange={(current) => this.handleChange2(current)}
					/>
				</div>
			</div>
		)
	}
}

export default PagerDemo
