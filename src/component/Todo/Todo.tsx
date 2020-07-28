import React, { useState } from 'react';
import './Todo.scss';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/todos';
import PopUp from '../PopUp/PopUp';

type PropsTodo = {
  todo: Todo
}

const Todo: React.FC<PropsTodo> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const changeStatus = () => {
    dispatch(toggleTodo(todo.id));
    setIsToggle(!isToggle);

  }

  const deleteTodo = (id: string) => {
    dispatch(removeTodo(id))
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
          // onClick={() => dispatch(removeTodo(todo.id))}
          onClick={() => setOpenConfirmationModal(true)}
        >
          Delete
        </button>

      )}

      {openConfirmationModal && (
        <PopUp
          name={todo.text}
          text='Do you really want delete'
          closePopUp={() => setOpenConfirmationModal(false)}
          confirmAction={() => deleteTodo(todo.id)}
        />
      )}
    </li>
  )
}

export default Todo;