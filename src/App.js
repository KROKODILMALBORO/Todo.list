import React from 'react'

import Head from './components/Head'
import TodoList from './components/TodoList'

import classes from './App.module.css'

function App() {
  return (
    <div className={`bg-dark text-dark bg-opacity-10 ${classes.app}`}>
      <Head />
      <TodoList />
    </div>
 )
}

export default App
