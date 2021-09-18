import useLogin from "./useLogin";

const Login = () => {
  const {
    values,
    handleInputChange,
    handleSubmit,
    isDisabledSubmit
  } = useLogin();

  return (
    <div className="h-100 w-100">
      <div className="h-100 container">
        <div className="h-100 row">
          <div className="mx-auto d-table h-100 col-sm-10 col-md-8 col-lg-6">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h2>Wellcome</h2>
                <p className="lead">Enter your credentials</p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="username"
                          className="form-label"
                        >
                          Username
                        </label>
                        <input
                          id="username"
                          name="username"
                          autoComplete="off"
                          type="text"
                          className="form-control"
                          value={values.username}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="password"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          autoComplete="off"
                          type="password"
                          className="form-control"
                          value={values.password}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isDisabledSubmit}
                        onClick={handleSubmit}
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;
