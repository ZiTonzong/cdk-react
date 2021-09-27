import React, { Component } from 'react'
import './index.scss'
import Button from '../../components/button/Button'
import Cascader from '../../components/cascader/Cascader'

const options = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangshu',
		label: 'Jiangshu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				disabled: true,
				children: [
					{
						value: 'jiangning',
						label: 'Jiangning',
					},
				],
			},
		],
	},
	{
		value: 'shanghai',
		label: 'Shanghai',
		children: [
			{
				value: 'pudong',
				label: 'Pudong',
				children: [
					{
						value: 'lujiazhui',
						label: 'Lujiazhui',
					},
				],
			},
		],
	},
]

class Article extends Component {
	constructor() {
		super()
		// this.type = 'success'
		this.state = {
			type: 'success',
		}
	}

	setType = (value) => {
		// this.type = value
		console.log('value', value)
		this.setState({ type: value })
	}

	handleChange = () => {}

	handleSelect = () => {}

	render() {
		return (
			<div className="article">
				<Cascader
					options={options}
					placeholder="cascader"
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				/>
			</div>
		)
	}
}

export default Article
