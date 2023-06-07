import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AuthService from "../../services/AuthService";
import ErrorNotification from "../errorAlert";
import { ArrowClockwise } from "react-bootstrap-icons";
import { XCircleFill } from "react-bootstrap-icons";

const SignupForm = ({ setLogin, show }) => {
  const [loading, setLoading] = useState(false); // Loading Status
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false); // Show Login Error
  const [errorResponse, setErrorResponse] = useState(""); // Set Error Response

  const ValidationSchema = Yup.object().shape({
    fullname: Yup.string(),
    username: Yup.string()
      .required("Username is required ")
      .min(6, "Username must be at least 6 characters")
      .max(26, "Username must not be more than 26 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters "),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationSchema) });

  const onSubmit = (data, e) => {
    setLoginError(false);
    setLoading(true);
    e.preventDefault();
    const fullname = data.fullname.split(" ", 2);
    const firstName = fullname[0];
    const lastName = fullname[1];
    let username = data.username.replaceAll(" ", "");
    username = username.toLowerCase();
    let email = data.email.toLowerCase();
    AuthService.register(firstName, lastName, username, email, data.password)
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        setLoginError(true);
        setErrorResponse(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const data = [
    {
      name: "fullname",
      type: "text",
      class: `form-control ${errors.fullname ? "is-invalid" : ""}`,
      message: errors.fullname?.message,
      label: "Full Name",
    },
    {
      name: "username",
      type: "text",
      class: `form-control ${errors.username ? "is-invalid" : ""}`,
      message: errors.username?.message,
      label: "Username",
    },
    {
      name: "email",
      type: "text",
      class: `form-control ${errors.email ? "is-invalid" : ""}`,
      message: errors.email?.message,
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      class: `form-control ${errors.password ? "is-invalid" : ""}`,
      message: errors.password?.message,
      label: "Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      class: `form-control ${errors.confirmPassword ? "is-invalid" : ""}`,
      message: errors.confirmPassword?.message,
      label: "Confirm Password",
    },
  ];

  return (
    <>
      <div className="modal animate">
        <div className="modalX" onClick={() => show(false)}>
          <XCircleFill />
        </div>
        <h1 id="text-center">Please Sign Up to Join GameReviewz</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {data.map((item) => (
            <div className="formGroup">
              <label>{item?.label}</label>
              <input
                name={`${item.name}`}
                type={`${item.type}`}
                {...register(`${item.name}`)}
                className={item.class}
              />
              <div className="invalid-feedback">{item.message}</div>
            </div>
          ))}

          <div className="formGroup">
            <button className="btn" type="submit" disabled={loading}>
              <div>{loading && <ArrowClockwise className="loading" />}</div>
              Sign Up
            </button>
          </div>
          <div className="formGroup"></div>
          {loginError && (
            <ErrorNotification
              header={"Oops, Something went wrong with your Authentication"}
              body={errorResponse}
              setLoginError={setLoginError}
            />
          )}
          {success && (
            <ErrorNotification
              header={"Welcome To GameReviewz!"}
              body={"Succesfully Signed Up!"}
              setLoginError={setSuccess}
              bgcolor={true}
            />
          )}
        </form>
      </div>
    </>
  );
};
export default SignupForm;
