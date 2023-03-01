import { createReducer } from "@reduxjs/toolkit";
import { Map } from "immutable";
import { setShips } from "actions/ships";

const initialState = new Map({
  ships: []
})

export const ships = createReducer(initialState, (builder) => {
  builder
    .addCase(setShips, (state, action) => {
      return state.set('ships', action.payload)
    })
})