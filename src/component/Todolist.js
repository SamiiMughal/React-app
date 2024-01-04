import React from 'react';
import App from './App';

export const Todoitem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};
export default Todoitem;

