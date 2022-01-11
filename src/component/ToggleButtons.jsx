import React from 'react'
import PropTypes from 'prop-types'

const ToggleButtons = (props) => {
  const { buttons, onClick } = props

  return buttons.map((b, index) => {
    const CLASS = index === 0 ? 'timeButton focus' : 'timeButton'
    return (
      <button key={index} className={CLASS} onClick={(e) => onClick(e, b)}>
        {b.message}
      </button>
    )
  })
}

ToggleButtons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.number,
      date: PropTypes.number,
      message: PropTypes.string
    })
  ),
  onClick: PropTypes.func
}

export default ToggleButtons
