import React from 'react'

export function TodoList({todos}) {
  return (
      <ul>{todos.map((todos)=>(
      <li>Tarea</li>))}
      </ul>)}
