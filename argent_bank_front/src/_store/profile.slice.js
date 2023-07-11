import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { alertActions } from "./alert.slice";
import { history, fetchWrapper } from "../_helpers";

// create slice

const name = 'profile';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const slice = createSlice({ name, initialState, reducers });

// exports

export const profileActions = { ...slice.actions , ...extraActions };
export const profileReducer = slice.reducer;

function createInitialState() {
    return {
      // initialize state from local storage to enable user to stay logged in
      value: JSON.parse(localStorage.getItem("profile")),
    };
  }

function createReducers() {
    return {
      setProfile,
    };
  
    function setProfile(state, action) {
      state.value = action.payload;
    }
  }
  
  function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/user`;
    return {
        update: update(),
        get : get(),
    };

    function update() {
    return createAsyncThunk(
        `${name}/update`,
         async function ({ username }, {dispatch}) { 
          dispatch(alertActions.clear());
          try {
            const profile = await fetchWrapper.put(`${baseUrl}/profile`, {
              userName: username,
            });
               // store profile redux
               dispatch(profileActions.setProfile(profile));
               // store profile broswer
               localStorage.setItem("profile", JSON.stringify(profile));
              const { from } = history.location.state || {
                from: { pathname: "/my-account" },
              };
              history.navigate(from);
          } catch (error) {
            dispatch(alertActions.error(error));
          }
        }
      );
    }

    function get(){
        return createAsyncThunk(
          `${name}/get`,
          async function (arg, { dispatch }) {
            dispatch(alertActions.clear());
            try {
                const profile = await fetchWrapper.post(`${baseUrl}/profile`);
                // store profile redux
                dispatch(profileActions.setProfile(profile));
                // store profile broswer
                localStorage.setItem("profile", JSON.stringify(profile));
            } catch (error) {
              dispatch(alertActions.error(error));
            }
          }
        );

    }

   
}
