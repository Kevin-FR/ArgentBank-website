import { createSlice } from "@reduxjs/toolkit";

// create slice

const name = "params";
const initialState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

// exports

export const paramsActions = { ...slice.actions };
export const paramsReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    value: null,
  };
}

function createReducers() {
  return {
    store,
    clear,
  };

  function store(state, action) {
    state.value = action.payload?.message || action.payload;
  }

  function clear(state) {
    state.value = null;
  }
}
