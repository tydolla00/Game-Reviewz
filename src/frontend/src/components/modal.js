import { useEffect, useState } from "react";
import { XCircleFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LoginModal = ({ show }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      let modal = document.getElementById("modal");
      if (event.key === "Escape" || event.target === modal) show(false);
    };
    window.addEventListener("mousedown", handleEsc);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("mousedown", handleEsc);
    };
  });
  return (
    <>
      <div id="modal" className="modalContainer">
        <div className="modal animate">
          <button className="modalX" onClick={() => show(false)}>
            <XCircleFill />
          </button>
          <h1 id="text-center">{login ? "Please Login" : "Please Sign Up"}</h1>
          <div className="modalBody">
            {login ? (
              <LoginForm
                username={username}
                handleChange={handleChange}
                password={password}
                handlePassChange={handlePassChange}
                setLogin={setLogin}
              />
            ) : (
              <SignupForm setLogin={setLogin} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginModal;

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

const SignupForm = ({ setLogin }) => {
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
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationSchema) });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formGroup">
        <label>Full Name</label>
        <input
          name="fullname"
          type="text"
          {...register("fullname")}
          className={`form-control ${errors.fullname ? "is-invalid" : ""} `}
        />
        <div className="invalid-feedback">{errors.fullname?.message}</div>
      </div>

      <div className="formGroup">
        <label>Username</label>
        <input
          name="username"
          type="text"
          {...register("username")}
          className={`form-control ${errors.username ? "is-invalid" : ""} `}
        />
        <div className="invalid-feedback">{errors.username?.message}</div>
      </div>

      <div className="formGroup">
        <label>Email</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          className={`form-control ${errors.email ? "is-invalid" : ""} `}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>

      <div className="formGroup">
        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register("password")}
          className={`form-control ${errors.password ? "is-invalid" : ""} `}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>

      <div className="formGroup">
        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className={`form-control ${
            errors.confirmPassword ? "is-invalid" : ""
          } `}
        />
        <div className="invalid-feedback">
          {errors.confirmPassword?.message}
        </div>
      </div>
      <div className="formGroup">
        <button className="btn" type="submit">
          Sign Up
        </button>
        <button className="btn reset" onClick={() => reset()} type="button">
          Reset
        </button>
      </div>
      <div className="formGroup">
        <button
          className="btn signedup"
          type="button"
          onClick={() => setLogin(true)}
        >
          Already Signed Up? Click here!
        </button>
      </div>
    </form>
  );
};
