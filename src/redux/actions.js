import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FIND_CONTACT,
  INIT_STORE,
} from "redux/actionType";
import { v4 as uuidv4 } from "uuid";

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { id: `${uuidv4()}`, name, number },
});

export const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  payload: contactId,
});

export const filterContact = (filterName) => ({
  type: FIND_CONTACT,
  payload: filterName,
});

export const initStore = (store) => ({
  type: INIT_STORE,
  payload: store,
});
