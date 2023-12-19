import React, { Component } from 'react'
import './index.scss'
import Button from '../../components/button/Button'

class ButtonDemo extends Component {
	constructor() {
		super()
		this.state = {
			loading: true,
			size: 'large',
		}
	}

	handleClick = () => {
		console.log('handleClick')
	}

	handleChangeSize = () => {
    console.log('handleChangeSize')
  }

	render() {
		return (
			<div className="article">
				<div className="button-demo__container">
					<Button>Default</Button>
					<Button type="primary">Primary</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="danger">Danger</Button>
				</div>
				<div className="button-demo__container">
					<Button disabled={true}>Disabled</Button>
					<Button loading={true} type="primary">
						Loading
					</Button>
					<Button
						icon="setting"
						loading={this.state.loading}
						type="primary"
						onClick={this.handleClick}
					>
						Click me
					</Button>
				</div>
				<div className="button-demo__container">
					<Button ghost={true}>Default</Button>
					<Button ghost={true} type="primary">
						Primary
					</Button>
					<Button ghost={true} type="dashed">
						Dashed
					</Button>
					<Button ghost={true} type="danger">
						Danger
					</Button>
				</div>
				<div className="button-demo__container">
					<Button
						size={this.state.size}
						onClick={() => this.handleChangeSize('small')}
						type="primary"
					>
						Small
					</Button>
					<Button
						size={this.state.size}
						onClick={() => this.handleChangeSize('medium')}
						type="primary"
					>
						Medium
					</Button>
					<Button
						size={this.state.size}
						onClick={() => this.handleChangeSize('large')}
						type="primary"
					>
						Large
					</Button>
				</div>
			</div>
		)
	}
}

export default ButtonDemo
