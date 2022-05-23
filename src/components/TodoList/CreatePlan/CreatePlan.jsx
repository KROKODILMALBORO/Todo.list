import React, {useState} from 'react'

const CreatePlan = (props) => {
    const [name, setName] = useState('')

    const postListPlan = () => {
        props.postListPlan({
            name: name,
            isCompleted: false,
        })

        setName('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            postListPlan()
        }
    }

    return (
        <div className='d-flex flex-row justify-content-center p-4'>
            <input
                className='form-control fs-4 w-50 shadow-sm px-3 mx-2'
                value={name}
                placeholder='Название нового дела'
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button
                className='btn btn-lg btn-primary shadow-sm'
                onClick={postListPlan}
            >
                Добавить
            </button>
        </div>
    )
}

export default CreatePlan
