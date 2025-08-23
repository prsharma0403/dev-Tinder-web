import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import {  removeUser } from "../utils/userSlice";
const NavBar = () => {
   const dispatch = useDispatch();
  const navigate=useNavigate()
  const user = useSelector((store) => store.user);
  const handleLogout=async()=>{
  try {
      const res = await axios.post(BASE_URL+
        "/logout",
       
        { withCredentials: true }
      );
      dispatch(removeUser())
      return navigate("/login");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/login" className="btn btn-ghost text-xl">👩‍❤️‍👨 dev-Tinder</Link>
        </div>

        <div className="flex gap-2">
          {user && (
            <div className="dropdown dropdown-end mx-5">
              <span>Welcome, {user.firstname}</span>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt=""
                    src="https://avatars.githubusercontent.com/u/22472516?v=4"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link  to="/profile"className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/setting">Settings</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
                
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
