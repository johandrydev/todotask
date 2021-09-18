import { useEffect, useReducer } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../auth/AuthContext";
import { EActionAuth, ETodoType } from "../../types/types";

interface IAction {
  type: ETodoType;
  payload: any
};

export interface ITask {
  ID?: string;
  task: string;
  isReady: boolean;
}

const todoReducer = (state: ITask[] = [], action: IAction) => {
  switch (action.type) {
    case ETodoType.ADD:
      return [...state, action.payload];

    case ETodoType.DELETE:
      return state.filter((todo: ITask) => todo.ID !== action.payload);

    case ETodoType.TOGGLE:
      return state.map((todo: ITask) =>
        (todo.ID === action.payload)
          ? { ...todo, isReady: !todo.isReady }
          : todo
      );

    default:
      return state;
  }
};

const useHome = () => {
  const { dispatch } = useAuthContext();
  const history = useHistory();

  const [todos, changeTodo] = useReducer(todoReducer, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const handleDelete = (todoId: string) => {
    changeTodo({
      type: ETodoType.DELETE,
      payload: todoId
    });
  };

  const handleToggle = (todoId: string) => {
    changeTodo({
      type: ETodoType.TOGGLE,
      payload: todoId
    });
  };

  const handleAddTodo = (newTodo: ITask) => {
    changeTodo({
      type: ETodoType.ADD,
      payload: newTodo
    });
  };

  const handleLogOut = () => {
    dispatch({
      type: EActionAuth.LOGOUT,
    });
    history.replace('/auth/login');
  };

  return {
    todos,
    handleDelete,
    handleToggle,
    handleAddTodo,
    handleLogOut
  };
};

export default useHome;
