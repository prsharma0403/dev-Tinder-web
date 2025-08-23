import { Navigate, Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
const Body = () => {
  const dispatch = useDispatch();
  const Navigate=useNavigate()
  const userData=useSelector((store)=>store.user);
  const fetchUser = async () => {
    if(userData) return
    try {
      const user = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      console.log("M yuser"+user)
      dispatch(addUser(resizeBy.data));
    } catch (err) {
      console.error(err);
      Navigate("/login");
    }
  };
  useEffect(() => {
    
 fetchUser();
    
   
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Body;
