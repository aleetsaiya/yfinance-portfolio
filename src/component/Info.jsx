import React from 'react'
import PropTypes from 'prop-types'

const Info = (props) => {
  const { title, data } = props

  return (
    <div>
      <div className="title" style={{ fontSize: '15px' }}>
        {title}
      </div>
      <div className="data" style={{ fontSize: '35px' }}>
        {data}
      </div>
    </div>
  )
}

Info.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Info
