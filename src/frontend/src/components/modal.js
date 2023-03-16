import { useEffect, useState } from "react";
import { XCircleFill } from "react-bootstrap-icons";
import SignupForm from "./signup";
import LoginForm from "./login";

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
