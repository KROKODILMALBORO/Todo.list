import React from 'react'

import checkImgFailed from './media/checkFailed.svg'
import checkImgDone from './media/checkDone.svg'

const Plan = (props) => {
    return (
        <div className='d-flex flex-row justify-content-center mb-3'>
            <div className='d-flex justify-content-between list-group-item list-group-item-action rounded shadow-sm w-50'>
                <span className='fs-4'>
                    {props.plan.name}
                </span>
                <div onClick={props.onComplete}>
                    {
                        props.plan.isComplete ?
                        <img
                            src={checkImgDone}
                            alt={'...'}
                        /> :
                        <img
                            src={checkImgFailed}
                            alt={'...'}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Plan
