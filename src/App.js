import React from 'react'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import Header from './components/Header'
import TodoList from './components/TodoList'

import combineReducers from './instances/listPlans/redux'

const store = createStore(combineReducers)

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
