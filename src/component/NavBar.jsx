import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { SiSimpleanalytics } from 'react-icons/si'
import { AiOutlineFile } from 'react-icons/ai'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp
} from 'react-icons/md'

const NavBar = (props) => {
  const { onClick, currentPage } = props
  const [showNavbar, setShowNavbar] = useState(true)
  const [topPixel, setTopPixel] = useState(0)
  const topPixelsLowerBound = -50
  const navbarHeight = 50
  const step = 10

  useEffect(() => {
    if (showNavbar && topPixel < 0) {
      const id = setTimeout(() => {
        setTopPixel((topPixel) => topPixel + step)
      }, 50)
      return () => clearTimeout(id)
    } else if (
      !showNavbar &&
      topPixel <= 0 &&
      topPixel >= topPixelsLowerBound
    ) {
      const id = setTimeout(() => {
        setTopPixel((topPixel) => topPixel - step)
      }, 50)
      return () => clearTimeout(id)
    }
  })

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const toggleIcon = () => {
    if (!showNavbar) {
      return (
        <MdOutlineKeyboardArrowDown
          className="dragNavbar-icon"
          onClick={toggleNavbar}
        />
      )
    }
    return (
      <MdOutlineKeyboardArrowUp
        className="dragNavbar-icon"
        onClick={toggleNavbar}
      />
    )
  }

  const NavbarStyle = () => {
    return {
      position: 'absolute',
      top: topPixel
    }
  }

  const dragNavbarStyle = () => {
    return {
      position: 'absolute',
      top:
        topPixel < topPixelsLowerBound + step
          ? '10px'
          : (topPixel + navbarHeight).toString() + 'px'
    }
  }

  const navbarHeightSpace = () => {
    if (topPixel < topPixelsLowerBound + step) return 15
    return topPixel + navbarHeight + step
  }

  return (
    <div>
      <div className="navbar" style={NavbarStyle()}>
        <div className="nav-title">Alee Codes</div>
        <div className="nav-wrapper">
          <li
            onClick={onClick}
            data-page="input-page"
            className={currentPage === 'input-page' ? 'nav current' : 'nav'}
          >
            <AiOutlineFile
              data-page="input-page"
              size={15}
              className="nav-icon"
            />
            <span data-page="input-page">更新檔案</span>
          </li>
          <li
            onClick={onClick}
            data-page="analyze-page"
            className={currentPage === 'analyze-page' ? 'nav current' : 'nav'}
          >
            <SiSimpleanalytics
              size={12}
              data-page="analyze-page"
              className="nav-icon"
            />
            <span data-page="analyze-page">持股分析</span>
          </li>
        </div>
      </div>
      <div className="dragNavbar" style={dragNavbarStyle()}>
        {toggleIcon()}
      </div>
      <div style={{ height: navbarHeightSpace().toString() + 'px' }}></div>
    </div>
  )
}

NavBar.propTypes = {
  onClick: PropTypes.func,
  currentPage: PropTypes.string
}

export default NavBar
