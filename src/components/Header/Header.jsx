import React from 'react'

import classes from './Header.module.css'

const Header = () => {

  return (
    <div className={`d-flex flex-row justify-content-center bg-primary text-white bg-opacity-50 ${classes.header}`}>
      <h1 className={`d-flex flex-row justify-content-center fw-bold ${classes.h1}`}>
        TODO
      </h1>
    </div>
  )
}

export default Header
