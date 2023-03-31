import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import AuthService from "../services/AuthService";

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

  const onSubmit = (data, e) => {
    e.preventDefault();
    const fullname = data.fullname.split(" ", 2);
    const firstName = fullname[0];
    const lastName = fullname[1];
    console.log(firstName + " " + lastName);
    console.log(JSON.stringify(data, null, 2));
    AuthService.register(
      firstName,
      lastName,
      data.username,
      data.email,
      data.password
    )
      .then((response) => {
        console.log(response.data);
        const currentUser = AuthService.getUser();
        console.log(currentUser);
        console.log(currentUser.username);
        alert("Succesfully Logged in");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
export default SignupForm;
