import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const FormDemo = () => {
	const onFinish = (values) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}

	const [userName, setUserName] = useState('23211')
	const [password, setPassword] = useState('12444')

	const changeValue = (e) => {
		console.log('e', e.target.value)
		setUserName(e.target.value)

		console.log('userName', userName)
	}

	const onValuesChange = (value) => {
		console.log('onValuesChange', value)
	}

	return (
		<div className="ant-d-table-demo">
			<div className="ant-d-table-demo__container">
				<Form
					name="basic"
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					initialValues={{
						username: userName,
						password,
					}}
					onValuesChange={onValuesChange}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{
							offset: 8,
							span: 16,
						}}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 8,
							span: 16,
						}}
					>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default FormDemo
