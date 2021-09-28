import React, { useEffect } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../../assets/icons/logo.jpg'
// import Search from '../../../assets/img/icon_search.svg'
// import HeadPortrait from '../../../assets/img/image_7.png'
import { useHistory, useLocation } from 'react-router-dom'

function Header() {
	const history = useHistory()
	const location = useLocation()

	const gotoIndex = () => {
		history.push('/')
	}

	useEffect(() => {
		// 需要在 componentDidMount 执行的内容
		console.log('location', location)
	}, [location])

	return (
		<header className="header">
			<div className="header__left" onClick={gotoIndex}>
				<div className="header__logo">
					<img className="header-container-logo" alt="Logo" src={Logo} />
				</div>
				<div className="header__title">
					<span className="header__title--me">cdk</span>-react
				</div>
			</div>
			<div className="header__right">
				<ul className="header__ul">
					<li>微博</li>
					<li>微信</li>
					<li>知乎</li>
					<li>github</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
