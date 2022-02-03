import React from 'react'

import classes from './Head.module.css'

const Head = () => {

  return (
    <div className={`d-flex flex-row justify-content-center bg-primary text-white bg-opacity-50 ${classes.head}`}>
      <h1 className={`d-flex flex-row justify-content-center fw-bold ${classes.h1}`}>
        TODO
      </h1>
    </div>
  )
}

export default Head
