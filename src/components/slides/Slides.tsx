import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classes } from '../../utils'
import './style'

export interface SlidesProps {
  duration?: number
  dots?: boolean
  className?: string
  style?: React.CSSProperties
  beforeChange?: (from: number, to: number) => any
  afterChange?: (current: number, from: number) => any
}

export interface SlidesState {
  hasTransitionClassName: boolean
  current: number
}

const componentName = 'Slides'

class Slides extends React.Component<SlidesProps, SlidesState> {
  public static displayName = componentName

  public static defaultProps = {
    duration: 0,
    dots: true
  }

  public static propTypes = {
    duration: PropTypes.number,
    dots: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func
  }
}