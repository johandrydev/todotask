import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../auth/AuthContext";
import { EActionAuth } from "../../types/types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";
export interface ITask {
  id?: string;
  task: string;
  isReady: boolean;
}

const TODO_LIST_QUERY = gql`
 query tasks {
  tasksList(orderBy: [createdAt_ASC]) {
     items {
       id
       task
       isReady
     }
   }
 }
`;

const CREATE_TODO_MUTATION = gql`
  mutation taskCreate($isReady: Boolean!, $task: String!) {
    taskCreate(data: {isReady: $isReady, task: $task}) {
      task
      isReady
    }
  }
`;

const IS_READY_TODO_MUTATION = gql`
  mutation taskUpdate($id: ID!) {
    taskUpdate(data: {isReady: true}, filter: {id: $id}) {
      id
    }
  }
`;

const IS_NOT_READY_TODO_MUTATION = gql`
  mutation taskUpdate($id: ID!) {
    taskUpdate(data: {isReady: false}, filter: {id: $id}) {
      id
    }
  }
`;

const DELETE_TODO_MUTATION = gql`
  mutation taskDelete($id: ID!) {
    taskDelete(data: { id: $id }) {
      success
    }
  }
`;

const useHome = () => {
  const { dispatch } = useAuthContext();
  const history = useHistory();
  const { data } = useQuery(TODO_LIST_QUERY);
  const [mutateAddTodo] = useMutation(CREATE_TODO_MUTATION, {
    refetchQueries: [{ query: TODO_LIST_QUERY }]
  });
  const [mutateIsReadyTodo] = useMutation(IS_READY_TODO_MUTATION, {
    refetchQueries: [{ query: TODO_LIST_QUERY }]
  });
  const [mutateIsNotReadyTodo] = useMutation(IS_NOT_READY_TODO_MUTATION, {
    refetchQueries: [{ query: TODO_LIST_QUERY }]
  });
  const [mutateDeleteTodo] = useMutation(DELETE_TODO_MUTATION, {
    refetchQueries: [{ query: TODO_LIST_QUERY }]
  });

  const [todos, setTodos] = useState<ITask[]>([]);

  useEffect(() => {
    if (data) {
      setTodos(data?.tasksList?.items);
    }
  }, [data]);

  const handleDelete = (todoId: string) => {
    mutateDeleteTodo({ variables: { id: todoId } })
  };

  const handleToggle = (todo: ITask) => {
    if (todo.isReady) {
      mutateIsNotReadyTodo({ variables: { id: todo.id } });
      return;
    }
    mutateIsReadyTodo({ variables: { id: todo.id } });
  };

  const handleAddTodo = (newTodo: ITask) => {
    mutateAddTodo({ variables: newTodo });
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
