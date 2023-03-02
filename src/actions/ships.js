import { createAction } from "@reduxjs/toolkit";
import { getShips } from "../Api";

export const setShips = createAction('setShips');
export const setFilterCountry = createAction('setFilterCountry');
export const setFilterType = createAction('setFilterType');
export const resetFilter = createAction('resetFilter');

export const loadShips = () => {
  return (dispatch) => {
    getShips().then((data) => {
      dispatch(setShips(data?.length > 0 ? data : []))
    }).catch((err) => {
      console.log(err);
    });
  }
}