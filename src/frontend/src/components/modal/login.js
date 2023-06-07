import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowClockwise, Google } from "react-bootstrap-icons";
import AuthService from "../../services/AuthService";
import ErrorNotification from "../errorAlert";
import "../../styles/Modal.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { XCircleFill } from "react-bootstrap-icons";

const LoginForm = ({ show }) => {
  const [loading, setLoading] = useState(false); // Loading Status
  const [loginError, setLoginError] = useState(false); // Show Login Error
  const [errorResponse, setErrorResponse] = useState(""); // Set Error Response
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { register, handleSubmit } = useForm();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationSchema) });

  // ## Submits Login form data.
  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true);
    AuthService.login(data.email, data.password)
      .then(() => {
        alert("Successfully logged in");
        window.location.reload();
      })
      .catch((error) => {
        // Should work in the future when returning error statements from backend.
        setErrorResponse(JSON.stringify(error.message));
        setLoginError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {/* <div className="google">
        <button disabled id="googlebutton">
          <Google />
          <div> Sign in With Google</div>
        </button>
      </div> */}
      <div className="modal animate">
        <div className="modalX" onClick={() => show(false)}>
          <XCircleFill />
        </div>
        <h1 id="text-center">Please Login</h1>
        <div className="modalBody">
          <form className="modalform" onSubmit={handleSubmit(onSubmit)}>
            <label className="modallabel">Email:</label>
            <div className="formGroup">
              <input
                type="text"
                name="username"
                className={`form-control ${errors.email ? "is-invalid" : ""} `}
                placeholder="Enter your Email"
                onChange={handleChange}
                {...register("email")}
                //   value={username}
                required
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <label className="modallabel">Password:</label>
            <div className="formGroup">
              <input
                type="password"
                name="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                } `}
                placeholder="Enter your password"
                onChange={handlePassChange}
                {...register("password")}
                //   value={password}
                required
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="justifycenter">
              <button className="btn" type="submit" disabled={loading}>
                <div>{loading && <ArrowClockwise className="loading" />}</div>
                Login
              </button>
            </div>

            {loginError && (
              <ErrorNotification
                header={"Oops, Something went wrong with your Authentication"}
                body={errorResponse}
                setLoginError={setLoginError}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
