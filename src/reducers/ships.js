import { createReducer } from "@reduxjs/toolkit";
import { Map } from "immutable";
import { setShips, setFilterCountry, setFilterType, resetFilter } from "actions/ships";

const initialState = new Map({
  ships: [],
  filterCountry: [],
  filter: [],
})

export const ships = createReducer(initialState, (builder) => {
  builder
    .addCase(setShips, (state, action) => {
      return state.set('ships', action.payload)
    })
    .addCase(setFilterCountry, (state, action) => {
      const filterShips = state.get('ships').filter(item => item.nation === action.payload);
      filterShips.sort((a, b) => {
        if (a.level < b.level){
          return -1
        }
        if (a.level > b.level){
          return 1
        }
        return 0
      })
      return state.set('filter', filterShips)
    })
    .addCase(resetFilter, (state, action) => {
      return state.set('filterCountry', state.get('filter'))
    })
    .addCase(setFilterType, (state, action) => {
      return state.set('filterCountry', state.get('filter').filter(item => item.tags[0] === action.payload))
    })
})