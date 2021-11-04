import React, { Component } from 'react'
import './index.scss'
import Table from '../../components/table/Table'
import Button from '../../components/button/Button'

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => (
			<a
				className="a-link"
				href="https://www.baidu.com"
				target="_blank"
				rel="noreferrer noopener"
			>
				{text}
			</a>
		),
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<div size="middle">
				<Button>Invite {record.name}</Button>
				<Button>Delete</Button>
			</div>
		),
	},
]

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
]

class TableDemo extends Component {
	constructor() {
		super()
		this.state = {
			columns,
			dataSource: data,
		}
	}

	render() {
		return (
			<div className="article">
				<Table
					columns={this.state.columns}
					dataSource={this.state.dataSource}
					selectCol={true}
				/>
			</div>
		)
	}
}

export default TableDemo
