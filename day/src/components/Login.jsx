import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/actions";

export const Login = () => {

  const [login, setLogin] = useState({
    username: "",
    pass: "",
  });

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/users").then(({ data }) => {

      let ar;
      ar = data;

      let flag = false;

      ar = ar.filter((user, i) => {
        if (login.username === user.username && login.pass === user.pass){
          flag = true;
          return user;
        }
      });
      if (flag == true) {
        dispatch(userLogin(arr[0]));
        localStorage.setItem("userLoginDetails", JSON.stringify(arr[0]));
      } else {
        alert("Please check username/password");
      }
    });
  };


  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={(e) => {
          handleSubmit(e);
          
        }}>Login</button>
    </div>
  );
};

