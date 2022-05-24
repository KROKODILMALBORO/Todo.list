import React from 'react'

const Plan = (props) => {
    return (
        <div className='d-flex flex-row justify-content-center mb-3'>
            <div
                className='d-flex justify-content-between list-group-item list-group-item-action rounded shadow-sm w-50'
                onClick={props.pathListPlan}
                role='button'
            >
                <span className='fs-4'>
                    {props.plan.name}
                </span>
                <input
                    className='form-check-input p-3 mb-1'
                    type='checkbox'
                    checked={props.plan.isCompleted}
                    onChange={props.pathListPlan}
                    onClick={props.pathListPlan}
                />
            </div>
        </div>
    )
}

export default Plan
