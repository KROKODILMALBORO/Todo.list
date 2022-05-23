import React from 'react'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducer from './instances/redux'

import Header from './components/Header'
import TodoList from './components/TodoList'

const store = createStore(combineReducer)

const App = () => {
    return (
        <div className='min-vh-100 bg-secondary bg-opacity-25 text-dark'>
            <Provider store={store}>
                <Header />
                <TodoList />
            </Provider>
        </div>
    )
}

export default App
