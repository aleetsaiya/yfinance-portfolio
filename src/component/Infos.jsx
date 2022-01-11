import React from 'react'
import PropTypes from 'prop-types'
import Info from './Info'

const Infos = (props) => {
  const { infos } = props

  return infos.map((info, index) => (
    <Info key={index} title={info.title} data={info.data} />
  ))
}

Infos.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  )
}

export default Infos
