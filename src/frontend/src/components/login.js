const LoginForm = ({
  username,
  handleChange,
  password,
  handlePassChange,
  setLogin,
}) => {
  return (
    <form>
      <div className="formGroup">
        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          onChange={handleChange}
          value={username}
          required
        />
      </div>
      <div className="formGroup">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={handlePassChange}
          value={password}
          required
        />
      </div>
      <button className="btn"> Login</button>
      <button className="btn signup" onClick={() => setLogin(false)}>
        Sign Up
      </button>
    </form>
  );
};
export default LoginForm;
