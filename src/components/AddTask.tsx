import { FC, useMemo } from "react";
import { useForm } from "../hooks/useForm";
import { ITask } from "../pages/home/useHome";

const AddTask: FC<IAddTask> = ({ submit }) => {
  const [values, handleChange, resetForm] = useForm({
    task: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (values.task.trim().length <= 1) {
      return;
    }

    const newTodo: ITask = {
      ID: new Date().getTime().toString(),
      task: values.task,
      isReady: false
    };

    submit(newTodo);
    resetForm();
  }

  const isDisabledSubmit = useMemo(() => values?.task?.trim() === '', [values]);
  return (
    <>
      <h5>Add task</h5>
      <hr />
      <div className="form-floating mb-2">
        <textarea
          id="task"
          name="task"
          className="form-control"
          placeholder="Leave a comment here"
          onChange={handleChange}
          value={values.task}
        ></textarea>
        <label htmlFor="task">Enter the task here...</label>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-outline-primary btn-block"
          onClick={handleSubmit}
          disabled={isDisabledSubmit}
        >
          Create task
        </button>
      </div>
    </>
  );
};
interface IAddTask {
  submit: (newTodo: ITask) => void;
};
export default AddTask;
