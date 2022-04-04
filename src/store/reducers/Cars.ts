import { ICar } from "../../models/ICar";

const ADD_CAR = "ADD_CAR";
const SET_FILTER = "SET_FILTER";

interface CarsState {
  carItems: ICar[];
  filter: {
    color: string | undefined;
    minSpeed: number | undefined;
    maxSpeed: number | undefined;
    classType: string | undefined;
  };
}

const initialState: CarsState = {
  carItems: [],
  filter: {
    color: undefined,
    minSpeed: undefined,
    maxSpeed: undefined,
    classType: undefined,
  },
};

const carReducer = (state = initialState, action: any): CarsState => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        carItems: [action.payload, ...state.carItems],
      };
    case SET_FILTER:
      return {
        ...state,
        filter: { ...state.filter, [action.payload.filterName]: action.payload.filterValue },
      };
    default:
      return state;
  }
};

interface AddCarActionType {
  type: typeof ADD_CAR;
  payload: ICar;
}

export const addCar = (car: ICar): AddCarActionType => {
  return {
    type: ADD_CAR,
    payload: car,
  };
};

interface SetFilterActionType {
  type: typeof SET_FILTER;
  payload: { filterName: string; filterValue: string | number };
}
export const setFilter = (filterName: string, filterValue: string | number): SetFilterActionType => {
  return {
    type: SET_FILTER,
    payload: { filterName, filterValue },
  };
};

export default carReducer;
