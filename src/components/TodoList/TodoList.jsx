import React, {useEffect} from 'react'

import {useListPlansWithReducer} from '../../instances/types/hooks.js'

import CreatePlan from './CreatePlan'
import Plan from './Plan'

const TodoList = () => {
    const {
        listPlans,
        getListPlans,
        postListPlan,
        patchListPlan,
    } = useListPlansWithReducer()

    useEffect(() => {
        getListPlans()
    }, [])

     return (
        <div className='container'>
            <CreatePlan postListPlan={postListPlan}/>
            {
                listPlans.length !== 0 ?
                listPlans.map((plan, index) =>
                    <Plan
                        key={plan.name}
                        plan={plan}
                        pathListPlan={() => patchListPlan(index)}
                    />
                ) :
                <div className='d-flex justify-content-center'>
                    <div className='bg-light rounded shadow-sm p-1 px-3'>
                        <span className='fs-4 text-secondary'>
                            Cписок дел сейчас пуст
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default TodoList
