import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [email, setEmailId] = useState("simran@gmail.com");
  const [password, setPassword] = useState("Simran@123");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL+
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data))
      return navigate("/feed");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="flex justify-center m-20">
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Login</h2>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <span>Email</span>
                <input
                  type="text"
                  value={email}
                  placeholder="abc@gmail.com"
                  className="input input-sm"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </li>
              <li>
                <span>Password</span>
                <input
                  type="text"
                  value={password}
                  placeholder="Password "
                  className="input input-sm"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
            </ul>
            <div className="mt-6">
              <button
                className="btn btn-primary btn-block"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
