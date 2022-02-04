import React from 'react'

import Header from './components/Header'
import TodoList from './components/TodoList'

import classes from './App.module.css'

function App() {
  return (
    <div className={`bg-dark text-dark bg-opacity-10 ${classes.app}`}>
      <Header />
      <TodoList />
    </div>
 )
}

export default App
