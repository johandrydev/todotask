import AddTask from "../../components/AddTask";
import { TodoList } from "../../components/TodoList";
import useHome from "./useHome";

const Home = () => {
  const {
    todos,
    handleDelete,
    handleToggle,
    handleAddTodo,
    handleLogOut
  } = useHome();

  return (
    <div className="container pt-4">
      <div className="d-flex justify-content-between">
        <h3 className="display-6">To Do Tasks</h3>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-danger btn-sm"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-md-5">
          <AddTask submit={handleAddTodo} />
        </div>
        <div className="col-12 col-md-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
