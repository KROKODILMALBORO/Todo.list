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
    <div className='d-flex justify-content-center m-2'>
      <input
        className='form-control w-50 m-2 fs-5'
        type='text'
        value={name}
        placeholder='Название нового дела'
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className='btn btn-primary m-2'
        onClick={addNewPlan}
      >
        Добавить
      </button>
    </div>
  )
}

export default CreatePlan
