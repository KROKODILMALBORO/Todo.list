import React from 'react'

import Header from './components/Header'
import TodoList from './components/TodoList'

const App = () => {
    return (
        <div className='min-vh-100 bg-secondary bg-opacity-25 text-dark'>
            <Header />
            <TodoList />
        </div>
    )
}

export default App
