import React, {useState, useEffect} from 'react'

import CreatePlan from './CreatePlan'
import Plan from './Plan'

import {LS_LIST_NAME} from './constans'

const TodoList = () => {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem(LS_LIST_NAME)) || []
    )

    useEffect(() => {
        if (!list.length) {
            return
        }

        const uncompletedList = list.filter((plan) => !plan.isComplete)

        if (!uncompletedList.length) {
            localStorage.setItem(LS_LIST_NAME, JSON.stringify([]))
            setList([])
        }

        localStorage.setItem(LS_LIST_NAME, JSON.stringify(list))
    }, [list])

    const addNewPlan = (newPlan) => {

        if (!newPlan.name) {
            alert('Чтобы добавить новое дело, его нужно записать!')

            return
        }

        const identicalList = list.find((plan) =>
            plan.name === newPlan.name
        )

        if (identicalList) {
            alert('Такое дело уже есть!')

            return
        }

        const newList = [...list, newPlan]

        setList(newList)
        }

        const onComplete = (index) => {
            const plan = list[index]
            const newPlan = {
                ...plan,
                isComplete: !plan.isComplete,
            }
            const newList = [...list]

            newList[index] = newPlan
            setList(newList)
        }

    return (
        <div className='container'>
            <CreatePlan addNewPlan={addNewPlan} />
            {list.length !== 0 ?
                list.map((plan, index) =>
                    <Plan
                        key={plan.name}
                        plan={plan}
                        onComplete={() => onComplete(index)}
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
