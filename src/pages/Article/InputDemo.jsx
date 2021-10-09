import React, { Component } from 'react'
import './index.scss'
import Input from '../../components/input/Input'
import Search from '../../components/input/Search'
import Textarea from '../../components/input/Textarea'

class InputDemo extends Component {
	constructor() {
		super()
		this.state = {
			// current: 20,
			inputValue: 93232,
		}
	}

	handleChange = (e) => {
		const value = e.target.value
		console.log('e', value)
		this.setState({
			inputValue: value || '',
		})
	}

	handleSearch = (value) => {
		console.log('value', value)
	}

	render() {
		return (
			<div className="article">
				<div className="button-demo__container">
					<Input
						placeholder="placeholder"
						onChange={this.handleChange}
						value={this.state.inputValue + ''}
					/>
				</div>
				<div className="button-demo__container">
					<Input
						addonBefore="Http://"
						addonAfter=".com"
						placeholder="your-site"
						onChange={this.handleChange}
					/>
				</div>
				{/* <div className="button-demo__container">
					<Input
						prefix={userIcon}
						placeholder="username"
						onChange={this.handleChange}
					/>
					<Input
						suffix={lockIcon}
						placeholder="password"
						onChange={this.handleChange}
					/>
				</div> */}
				<div className="button-demo__container">
					<Input disabled={true} placeholder="disabled" />
				</div>
				<div className="button-demo__container">
					<Input error={true} placeholder="error" />
				</div>
				<div className="button-demo__container">
					<Search
						placeholder="default"
						onSearch={(value) => this.handleSearch(value)}
					/>
				</div>
				<div className="button-demo__container">
					<Search
						enterButton={true}
						placeholder="enterButton"
						onSearch={(value) => this.handleSearch(value)}
					/>
				</div>
				<div className="button-demo__container">
					<Search
						enterButton="Search"
						onSearch={(value) => this.handleSearch(value)}
					/>
				</div>
				<div className="button-demo__container">
					<Textarea placeholder="textarea" onChange={this.handleChange} />
				</div>
				<div className="button-demo__container">
					<Textarea
						autosize={true}
						placeholder="autosize"
						onChange={this.handleChange}
					/>
				</div>
			</div>
		)
	}
}

export default InputDemo
