import React, { useEffect, useState } from 'react'
import './style/index.scss'

function Button({ children, type, setType }) {
	// setTimeout(() => {
  //   // alert('w')
  //   setType('primary')
  // }, 3000)

  const [test, setTest] = useState(0)
  const [count, setCount] = useState(0)

  const handleClick = () => {
    let myCount = count
    setCount(++myCount)
    // setTest(9)
    console.log('count', count)
    const myTest = count % 2 === 0 ? 1 : 0
    setTest(myTest)
  }

  // setTimeout(() => {
  //   alert('sss')
  // }, 4000)

	return (
		<button className={['c-button', `btn-${type}`].join(' ')} onClick={handleClick}>
			{children}-{test}
		</button>
	)
}

export default Button
