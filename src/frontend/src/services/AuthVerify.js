import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split(".")[1]));
//   } catch (e) {
//     return null;
//   }
// };

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

const AuthVerify = (props) => {
  let location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    console.log(token);

    if (user) {
      const decodedJwt = parseJwt(user.token);
      console.log(decodedJwt.exp);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
        console.log("you have been logged out");
      }
    }
  }, [location, props]);

  return;
};

export default AuthVerify;
