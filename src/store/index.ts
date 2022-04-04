import { combineReducers, createStore } from "redux";
import carsReducer from "./reducers/Cars";

const rootReducer = combineReducers({
  carsReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
