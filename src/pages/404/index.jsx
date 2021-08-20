import React, { Component } from 'react'
import './index.css'
import NotFountOne from '../../assets/img/404_not_found_1.png'
import NotFountTwo from '../../assets/img/404_not_found_2.png'
import NotFountThree from '../../assets/img/404_not_found_3.png'
import NotFountFour from '../../assets/img/404_not_found_4.png'

class NotFound extends Component {
	render() {
		return (
			<div className="not-found">
				<div className="not-found-img">
					<img
						className="not-found-img-1"
						src={NotFountOne}
						alt="查找不到页面"
					/>
					<img
						className="not-found-img-2"
						src={NotFountTwo}
						alt="查找不到页面"
					/>
					<img
						className="not-found-img-3"
						src={NotFountThree}
						alt="查找不到页面"
					/>
					<img
						className="not-found-img-4"
						src={NotFountFour}
						alt="查找不到页面"
					/>
				</div>
        <button className="go-home">回到首页</button>
			</div>
		)
	}
}

export default NotFound