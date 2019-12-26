import React from 'react'
import PropTypes from 'prop-types'

const BurgerMenu = ({ style, showItemsHandler, color, lineColor }) => {
  let classNames
  if (style) {
    classNames = ['BurgerMenu', style].join(' ')
  } else {
    classNames = 'BurgerMenu'
  }
  return (
    <div
      className={classNames}
      onClick={showItemsHandler}
      style={{backgroundColor: color || '#08cbc4'}}
    >
      <div className='line' style={{ backgroundColor: lineColor || 'white' }} />
      <div className='line' style={{ backgroundColor: lineColor || 'white' }} />
      <div className='line' style={{ backgroundColor: lineColor || 'white' }} />
    </div>
  )
}
BurgerMenu.propTypes = {
  showItemsHandler: PropTypes.any,
  color: PropTypes.any,
  style: PropTypes.string,
  lineColor: PropTypes.string
}

export default BurgerMenu
