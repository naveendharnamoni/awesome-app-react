import { useEffect, useRef, useState, type MouseEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const usernameInputRef = useRef<HTMLInputElement>(null);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("LoginPage Mount");
    usernameInputRef.current?.focus();

    return () => {
      console.log("LoginPage Unmount");
    };
  }, []);

  async function login(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (username && password) {
      try {
        const url = "http://localhost:9000/login";
        const data = {
          name: username,
          password: password,
        };
        let response = await axios.post(url, data);
        console.log(response);
        setMessage("");
        dispatch({
          type: "login",
          payload: {
            isAuthenticated: true,
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
            username,
          },
        });
        navigate("/");
      } catch (error) {
        setMessage("Please enter valid creds");
        dispatch({type:'logout'})
      }
    } else {
      setMessage("Please enter valid creds");
    }
  }

  return (
    <div>
      <h3>Login</h3>
      {message ? <div className="alert alert-warning">{message}</div> : null}
      <form>
        <div className="form-group mb-3">
          <span className="form-group-text">Username</span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameInputRef}
          />
        </div>
        <div className="form-group">
          <span className="form-group-text">Password</span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
