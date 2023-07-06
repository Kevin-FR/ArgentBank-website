import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { alertActions } from "./alert.slice";
import { history, fetchWrapper } from "../_helpers";

// create slice

const name = "auth";
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    // initialize state from local storage to enable user to stay logged in
    value: JSON.parse(localStorage.getItem("auth")),
  };
}

function createReducers() {
  return {
    setAuth,
  };

  function setAuth(state, action) {
    state.value = action.payload;
  }
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}/user`;

  return {
    login: login(),
    logout: logout(),
    profile: profile(),
  };

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async function ({ email, password }, { dispatch }) {
        dispatch(alertActions.clear());
        try {
          // Connect for get token
          const user = await fetchWrapper.post(`${baseUrl}/login`, {
            email,
            password,
          });
          // Store token
          dispatch(authActions.setAuth(user));
         // Get profile with token
            const profile = await fetchWrapper.post(`${baseUrl}/profile`);
            const merge = {
              ...user.body,
              ...profile.body,
            };

            // set auth user with profile in redux state
            dispatch(authActions.setAuth(merge));

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("user", JSON.stringify(merge));

            // get return url from location state or default to home page
            const { from } = history.location.state || {
              from: { pathname: "/" },
            };
            history.navigate(from);
          

          //
        } catch (error) {
          dispatch(alertActions.error(error));
        }
      }
    );
  }

  function profile() {
    return createAsyncThunk(
      `${name}/profile`,
      async function (arg, { dispatch }) {
        dispatch(alertActions.clear());
        const profile = await fetchWrapper.post(`${baseUrl}/profile`);
        console.log(profile.body);
        //dispatch(authActions.setAuth(profile));
        //localStorage.setItem("user", JSON.stringify(profile));
      }
    );
  }

  function logout() {
    return createAsyncThunk(`${name}/logout`, function (arg, { dispatch }) {
      dispatch(authActions.setAuth(null));
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      history.navigate("/");
    });
  }
}
