import React, { useState } from 'react';
import TodoItem from './Todoitem';;
import { TodoItem } from './Todolist';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Wash car', completed: false },
    { id: 2, text: 'Go for groceries', completed: false },

  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodoText, completed: false }]);
      setNewTodoText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

;

