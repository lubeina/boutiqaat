import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "../reducers/reducer";

const rootReducer = combineReducers({ reducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
