import React from 'react'

import classes from './Plan.module.css'

import checkImgFailed from './media/checkFailed.svg'
import checkImgDone from './media/checkDone.svg'

const Plan = (props) => {
  return (
    <div className='list-group'>
      <div className='d-flex justify-content-center'>
        <div className={classes.plan}>
          <div className='d-flex justify-content-between list-group-item list-group-item-action m-1 fs-4'>
            {props.plan.name}
            <div onClick={props.onComplete}>
              {
                props.plan.isComplete ?
                  <img src={checkImgDone} alt={'Черный квадрат с белой галочкой'}/> :
                  <img src={checkImgFailed} alt={'Пустой квадрат'}/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan
