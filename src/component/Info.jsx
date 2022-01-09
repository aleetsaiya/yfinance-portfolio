import React from 'react'

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

export default Info
