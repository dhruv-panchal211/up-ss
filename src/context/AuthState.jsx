import { useReducer } from "react";
import axios from "axios";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import { LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./types";

const AuthState = (props) => {
  const initialState = {
    isAuth: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({
        type: LOAD_USER,
      });
    }
  };

  //login user
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        formData,
        config
      );

      if (res.status === 200) {
        // Swal.fire({
        //   title: "Success",
        //   text: res?.data?.message,
        //   icon: "success",
        // });
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
      });
    } catch (err) {
      // Swal.fire({
      //   title: "Error",
      //   text: err?.response?.data?.message,
      //   icon: "error",
      // });
      dispatch({
        type: LOGIN_FAIL,
        payload: err?.response?.data?.message,
      });
    }
  };

  //logout
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: state.isAuth,
        loading: state.loading,
        login,
        logout,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
