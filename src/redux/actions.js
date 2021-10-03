import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FIND_CONTACT,
  INIT_STORE,
} from "redux/actionType";

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { id: Date.now(), name, number },
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const findContact = (filterName) => ({
  type: FIND_CONTACT,
  payload: filterName,
});

export const initStore = (store) => ({
  type: INIT_STORE,
  payload: store,
});
