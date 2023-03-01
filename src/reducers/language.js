import { createReducer } from "@reduxjs/toolkit";
import { Map } from "immutable";
import { setLanguage } from 'actions/language';

const initialState = new Map({
  language: 'en'
})

export const language = createReducer(initialState, (builder) => {
  builder
    .addCase(setLanguage, (state, action) => {
      return state.set('language', action.payload)
    })
})