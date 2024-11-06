import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  //  login user

  async function loginUser(email, password) {
    await axios
      .post("https://room-rental-backend-ece1.onrender.com/api/loginuser", { email, password })
      .then(({ data }) => {
        sessionStorage.setItem("user", JSON.stringify(data)); // Store the complete `data` object
        console.log("User data stored:", data); // Log user data
        toast.success(data.message);
        setUser(data);
        setIsAuth(true);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }

  useEffect(() => {
    let userInSession = sessionStorage.getItem("user");
    if (userInSession) {
      setIsAuth(true);
      setUser(JSON.parse(userInSession));
    } else {
      setUser({ token: null });
    }
  }, []);

  // logout
  function logoutUser() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setIsAuth(false);
    setUser(null);
  }

  // register user
  async function registerUser(
    fullname,
    email,
    password,
    mob_no,
    adharno,
    question
  ) {
    try {
      const userDetails = {
        fullname,
        email,
        password,
        mob_no,
        adharno,
        question,
      };
      const res = await axios.post(
        "https://room-rental-backend-ece1.onrender.com/api/userregister",
        userDetails
      );
      if (res.data) {
        toast.success("Account created succesfully");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  // add room for rent
  async function addRoomRent(
    title,
    description,
    address,
    mob_no,
    city,
    state,
    pincode,
    roomType,
    price,
    image,
    facilities,
    latitude,
    longitude
  ) {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("address", address);
      formData.append("mob_no", mob_no);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("pincode", pincode);
      formData.append("roomType", roomType);
      formData.append("price", price);
      formData.append("image", image[0]);
      formData.append("facilities", facilities);
      formData.append("latitude", latitude);
      formData.append("longitude", longitude);

      const userToken = JSON.parse(sessionStorage.getItem("user"))?.token;

      if (!userToken) {
        toast.error("Please login to add a room.");
        return;
      }

      const res = await axios.post(
        "https://room-rental-backend-ece1.onrender.com/api/addroom",
        formData,
        {
          headers: { token: userToken, "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add room");
    }
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user,
        isAuth,
        logoutUser,
        registerUser,
        addRoomRent,
        isAuth,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
