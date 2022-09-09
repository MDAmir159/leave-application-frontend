import React from 'react'
import './HeaderStyle.css'

const Header = (props) => {
  return (
    <div className='header-container'>
        <h1>{props.header}</h1>
    </div>
  )
}

export default Header