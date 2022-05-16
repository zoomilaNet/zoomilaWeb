import { createSlice } from "@reduxjs/toolkit";
import { CityDto } from "../api";
var neighbour: number[] = []
var building: string[] = []
const initialState = {
    citySelected: <CityDto>{ id:  0, name: "" },
    neighbourhoodSelected: <number[]>neighbour,
    buildingSelected: <string[]>building,
}
export const changeState = createSlice({
    name: 'searchState', initialState, reducers: {
        changeCity: (state, action) => {
            state.citySelected = action.payload
        },
        changeNeighbourhood: (state, action) => {
            state.neighbourhoodSelected = action.payload
        },
        changeBuildings: (state, action) => {
            state.buildingSelected = action.payload
        }
    }
});
export const { changeCity, changeNeighbourhood, changeBuildings } = changeState.actions;
export default changeState.reducer;