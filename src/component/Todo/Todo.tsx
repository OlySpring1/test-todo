import React, { useState } from 'react';
import './Todo.scss';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/todos';

type PropsTodo = {
  todo: Todo
}

const Todo: React.FC<PropsTodo> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const changeStatus = () => {
    dispatch(toggleTodo(todo.id));
    setIsToggle(!isToggle);

  }
  return (
    <li>
      <button
        type="button"
        onClick={changeStatus}
      >
        {todo.text}
      </button>
      {isToggle && (
              <button
              type="button"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
      
      )}
    </li>
  )
}

export default Todo;