import { createSlice } from "@reduxjs/toolkit";
import { CityDto } from "../api";
import {  getCookie, checkCookies } from 'cookies-next';
var neighbour: number[] = []
var building: string[] = []
// if (checkCookies('neighbourLenghth')) {
//     let lenghth = Number(getCookie('neighbourLenghth'));
//     for (let i = 0; i < lenghth; i++) {
//         neighbour.push(Number(getCookie('neighbour' + i)));
//     }
// }
// if (checkCookies('buildingLenghth')) {
//     let lenghth = Number(getCookie('buildingLenghth'));
//     for (let i = 0; i < lenghth; i++) {
//         building.push(getCookie('building' + i) as string);
//     }
// }
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