import { combineReducers } from "redux";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FIND_CONTACT,
  INIT_STORE,
} from "redux/actionType";

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      localStorage.setItem(
        "contacts",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];

    case DELETE_CONTACT:
      const newState = state.filter((el) => el.id !== action.payload);
      localStorage.setItem("contacts", JSON.stringify(newState));
      return newState;

    case INIT_STORE:
      return (state = action.payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case FIND_CONTACT:
      return (state = action.payload);
    default:
      return state;
  }
};

const reducerContacts = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: reducerContacts,
});

export default rootReducer;
