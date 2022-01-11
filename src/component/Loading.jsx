import React from 'react'
import PropTypes from 'prop-types'

const Loading = (props) => {
  const { show } = props
  return <div className={show ? 'load' : 'hide'}></div>
}

Loading.propTypes = {
  show: PropTypes.bool
}

export default Loading
