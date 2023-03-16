import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowClockwise } from "react-bootstrap-icons";
import AuthService from "../services/AuthService";

const LoginForm = ({
  username,
  handleChange,
  password,
  handlePassChange,
  setLogin,
}) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);
    console.log(JSON.stringify(data, null, 2));
    AuthService.login(data.email, data.password)
      .then((response) => {
        console.log(response);
        alert("Successfully logged in");
      })
      .catch((error) => {
        console.log(error);
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
        <span>{loading && <ArrowClockwise className="loading" />}</span>
        Login
      </button>
      <button className="btn signup" onClick={() => setLogin(false)}>
        Sign Up
      </button>
    </form>
  );
};
export default LoginForm;
