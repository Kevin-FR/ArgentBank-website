import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { alertActions } from "./alert.slice";
import { profileActions } from "./profile.slice";
import { paramsActions } from "./params.slice";

import { history } from "../_helpers";

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

  return {
    login: login(),
    logout: logout(),
  };

  function login() {
    return createAsyncThunk(
      `${name}/login`,
      async function (user, { dispatch }) {
        dispatch(alertActions.clear());
        
          dispatch(authActions.setAuth(user));
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("auth", JSON.stringify(user));
            dispatch(profileActions.get());
            // get return url from location state or default to home page
            const { from } = history.location.state || {
              from: { pathname: "/" },
            };
            history.navigate(from);
      }
    );
  }

  function logout() {
    return createAsyncThunk(`${name}/logout`, function (arg, { dispatch }) {
      dispatch(authActions.setAuth(null));
      dispatch(profileActions.setProfile(null));
      dispatch(paramsActions.clear());
      localStorage.removeItem("auth");
      localStorage.removeItem("profile");
      history.navigate("/");
    });
  }
}
