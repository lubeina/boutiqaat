import { SET_DATA } from "../actions/actionTypes";

const initialState = {
  slider: null,
  celebrity: null,
  boutiqaatPicks: null,
  boutiqaatBeautySchool: null,
  loading: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      let data = action.payload;

      const slider = data.filter((item) => {
        if (item.type === "slider") {
          return item;
        }
        return null;
      });
      const celebrity = data.filter((item) => {
        if (item.type === "celebrity") {
          return item;
        }
        return null;
      });
      const boutiqaatPicks = data.filter((item) => {
        if (item.type === "product") {
          return item;
        }
        return null;
      });
      const boutiqaatBeautySchool = data.filter((item) => {
        if (item.type === "banner") {
          return item;
        }
        return null;
      });
      return {
        ...state,
        slider,
        celebrity,
        boutiqaatBeautySchool,
        boutiqaatPicks,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
