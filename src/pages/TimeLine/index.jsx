import React, {Component} from 'react'
import './index.scss'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Nav = Loadable({
  loader: () => import('./components/Nav'),
  loading: Loading
})

const LeftList = Loadable({
  loader: () => import('./components/LeftList'),
  loading: Loading
})

const RightRecommend = Loadable({
  loader: () => import('./components/RightRecommend'),
  loading: Loading
})

class TimeLine extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.backTop = this.backTop()
  // }

  render() {
    return (
      <div className="timeline-container">
        <div>组件展示</div>
        {/* <Nav/> */}
        {/* <div className="timeline-container">
          <LeftList/>
          <RightRecommend/>
        </div>
        <button className="scroll-to-top" onClick={this.backTop}>返回顶部</button> */}
      </div>
    )
  }

  backTop = () => {
    console.log(document)
  }
}

export default TimeLine