import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowClockwise } from "react-bootstrap-icons";
import AuthService from "../services/AuthService";
import ErrorNotification from "./errorAlert";

const LoginForm = ({
  username,
  handleChange,
  password,
  handlePassChange,
  setLogin,
}) => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);
    console.log(JSON.stringify(data, null, 2));
    AuthService.login(data.email, data.password)
      .then((response) => {
        console.log(response);
        alert("Successfully logged in"); // Still need to test JWT Expiration.
        const currentUser = AuthService.getUser();
        console.log(currentUser);
        console.log(currentUser.username);
      })
      .catch((error) => {
        console.log(error);
        setErrorResponse(JSON.stringify(error.message)); // Should work in the future when returning error statements from backend.
      })
      .finally(() => {
        setLoginError(true);
        setLoading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formGroup">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Enter your username"
          onChange={handleChange}
          {...register("email")}
          //   value={username}
          required
        />
      </div>
      <div className="formGroup">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={handlePassChange}
          {...register("password")}
          //   value={password}
          required
        />
      </div>
      <button className="btn" type="submit">
        <div>{loading && <ArrowClockwise className="loading" />}</div>
        Login
      </button>
      <button className="btn signup" onClick={() => setLogin(false)}>
        Sign Up
      </button>
      {loginError && (
        <ErrorNotification
          header={"Oops, Something went wrong with your Authentication"}
          body={errorResponse}
          setLoginError={setLoginError}
        />
      )}
    </form>
  );
};
export default LoginForm;
