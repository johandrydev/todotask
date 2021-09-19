import { FC } from 'react'
import { ITask } from '../pages/home/useHome'
import { TodoListItem } from './TodoListItem'

export const TodoList: FC<ITodoList> = ({ todos, handleDelete, handleToggle }) => {
  return (
    <>
      <h5>Tasks list</h5>
      <hr />
      <ul className="list-group list-group-flush">
        {
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          ))
        }
      </ul>
    </>
  )
}
interface ITodoList {
  todos: ITask[],
  handleDelete: (id: string) => void,
  handleToggle: (todo: ITask) => void,
};
