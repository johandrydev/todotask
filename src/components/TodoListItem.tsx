import { FC } from "react";
import { ITask } from "../pages/home/useHome";

export const TodoListItem: FC<ITodoListItem> = ({ todo, handleDelete, handleToggle }) => {
  return (
    <div
      className="card"
    >
      <div
        className="card-body d-flex justify-content-between"
      >
        <span
          className={`task-item lead ${todo.isReady && 'complete'}`}
          onClick={() => handleToggle((todo.ID as string))}
        >
          {todo.task}
        </span>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete((todo.ID as string))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
};
interface ITodoListItem {
  todo: ITask,
  handleDelete: (id: string) => void,
  handleToggle: (id: string) => void,
};
