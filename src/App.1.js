import TodoList from './components/Todolist';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  function handleText() {
    if (task !== null && task !== '') {
      setList([...list, task]);
      setTask(''); // Empty after add
    }

  }

  function handleOnChange(e) {
    setTask(e.target.value);
  }

  function deleteHandler(id) {

    let newList = [];
    list.filter((item, count) => {
      if (count !== id) {
        newList.push(item);

      }
    });
    setList(newList);

  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleText();
    }
  }

  return (
    <>
      <div className="App">
        <TodoList />
      </div>

      <div className='main-sec'>
        <h2>Todo List</h2>
        <div className='row'>
          <div className='col-md-10 pt-3'>
            <input type='text' className='form-control' value={task} onChange={handleOnChange} onKeyDown={handleKeyDown} />
          </div>
          <div className='col-md-2 pt-3'>
            <button className='btn btn-primary' onClick={() => handleText()}>Add</button>
          </div>
        </div>
        {/* <div className='todo-item' >
              <p>Task here</p>
              <button className='btn btn-danger'>Delete</button>
            </div> */}
      </div>

      <div className='row mt-5 mx-3'>
        {list.map((item, count) => {
          return (
            <div key={count} className="todo-card mx-2 mt-4">
              <div className="todo-header">Task {count + 1}</div>
              <div className="todo-text">{item}</div>
              <div className="todo-actions">
                <button className='btn btn-danger' onClick={() => deleteHandler(count)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>


    </>

  );

  export default App;
}
