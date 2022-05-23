import React, {useState} from 'react'

const CreatePlan = (props) => {
    const [name, setName] = useState('')

    const addNewPlan = () => {
        props.addNewPlan({
            name: name,
            isComplete: false,
        })
        setName('')
    }

    const handleKeyPress = (e) => {

        if (e.key === 'Enter') {
            addNewPlan()
        }
    }

    return (
        <div className='d-flex flex-row justify-content-center p-4'>
            <input
                className='form-control fs-4 w-50 shadow-sm px-3 mx-2'
                type='text'
                value={name}
                placeholder='Название нового дела'
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button
                className='btn btn-lg btn-primary shadow-sm'
                onClick={addNewPlan}
            >
                Добавить
            </button>
        </div>
    )
}

export default CreatePlan
