import React, { useState } from 'react';
import './Todo.scss';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/todos';
import PopUp from '../PopUp/PopUp';
import cn from 'classnames';
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
    <li className="todo">
      <button
        type="button"
        className={cn("todo__item", {
          "todo__item-active": isToggle
        })}
        onClick={changeStatus}
      >
        {todo.text}
      </button>
      {isToggle && (
        <a href="#popup1"
          className="todo__btn-delete"
          onClick={() => setOpenConfirmationModal(true)}
        >
          Delete
        </a>
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