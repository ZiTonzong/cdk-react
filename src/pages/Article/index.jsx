import React, { Component } from 'react'
import './index.scss'
import Button from '../../components/button/Button'

class Article extends Component {
	constructor() {
		super()
		// this.type = 'success'
		this.state = {
			type: 'success'
		}
	}

	setType = (value) => {
		// this.type = value
		console.log('value', value)
		this.setState({type: value})
	}

	render() {
		// setTimeout(() => {
		// 	this.setType('cdk')
		// }, 3000)
		return (
			<div className="article">
				<div>{this.state.type}</div>
				<Button type={this.state.type} setType={this.setType}>
					sssa
				</Button>
				<div className="article__left-panel">
					<div>
						<i className="icon icon-notice"></i>
					</div>
					<div>
						<i className="icon icon-notice"></i>
					</div>
					<div>
						<i className="icon icon-notice"></i>
					</div>
					<div>
						<i className="icon icon-notice"></i>
					</div>
					<div>分享</div>
					<div>
						<i className="icon icon-notice"></i>
					</div>
					<div>
						<i className="icon icon-notice"></i>
					</div>
					<div>
						<i className="icon icon-notice"></i>
					</div>
				</div>
				<div className="article__main">
					<div>dd</div>
				</div>
			</div>
		)
	}
}

export default Article
