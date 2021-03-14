import * as JsonData from "../../dataset/mock.json";
import { SET_DATA } from "../actions/actionTypes";

export const fetchBoutiqaat = () => (dispatch) => {
  try {
    const data = JsonData.data.payload;
    console.log(data);
    dispatch({ type: SET_DATA, payload: data });
  } catch (error) {
    console.error(error);
  }
};
