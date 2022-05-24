import * as action from './api';
import env from '../config';
import { createSlice } from '@reduxjs/toolkit';

const url = env.endpoints.USER;

const initialState = {
  loading: false,
  list: [],
  lastFetch: null,
  error: null,
};

export const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserRequest: (state) => {
      state.loading = true;
    },
    editUserRequest: (state) => {
      state.loading = true;
    },
    userCreated: (state, action) => {
      state.loading = false;
      state.list.push(action.payload);
    },
    userEdited: (state, action) => {
      state.loading = false;
      state.list = state.list.map((user) =>
        user._id !== action.payload._id ? user : action.payload
      );
    },
    userEditedFailed: (state, action) => {
      state.loading = false;
      state.list = state.list.map((user) =>
        user._id !== action.payload ? user : undefined
      );
      state.error = action.payload;
    },
    userCreateRequestFailed: (state) => {
      state.loading = false;
    },
    usersRequested: (state) => {
      state.loading = true;
    },
    usersReceived: (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.lastFetch = Date.now;
      state.error = null;
    },

    usersRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.list = [];
    },
    userRequestedSucceed: (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.lastFetch = Date.now;
      state.error = null;
    },
    userRequested: (state, action) => {
      state.loading = true;
    },
    usersRequestedFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.list = [];
    },
    userLockSucceed: (state, action) => {
      state.loading = false;
      state.list = state.list.map((user) => {
        if (user._id === action.payload._id) return action.payload;
        return user;
      });
      state.error = null;
    },
    userLockRequested: (state) => {
      state.loading = true;
    },
    userLockFailed: (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.payload;
    },
    establishmentAddRequest: (state) => {
      state.loading = true;
    },
    establishmentAdded: (state, action) => {
      state.loading = false;
      state.list = state.list.map((user) => {
        if (user._id !== action.payload._id) return user;
        return action.payload;
      });
    },
    establishmentAddFailed: (state, action) => {
      state.loading = false;
    },
    establishmentRemoveRequest: (state) => {
      state.loading = true;
    },
    establishmentRemoved: (state, action) => {
      state.list = state.list.map((user) => {
        if (user._id !== action.payload._id) return user;
        return action.payload;
      });
      state.loading = false;
    },
    establishmentRemoveFailed: (state, action) => {
      state.loading = false;
    },
  },
});
export const getUsers = () => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url,
      method: 'GET',
      onSuccess: User.actions.userRequestedSucceed.type,
      onStart: User.actions.userRequested.type,
      onError: User.actions.usersRequestedFailed.type,
    })
  );
};
export const createUser = (newUserData) => (dispatch, getState) => {
  dispatch(
    action.apiCallBegan({
      url,
      data: newUserData,
      method: 'POST',
      onSuccess: User.actions.userCreated.type,
      onStart: User.actions.createUserRequest.type,
      onError: User.actions.usersRequestFailed.type,
    })
  );
};
export const toggleLockUser = (id) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: `${url}/lock/${id}`,
      method: 'PUT',
      onSuccess: User.actions.userLockSucceed.type,
      onStart: User.actions.userLockRequested.type,
      onError: User.actions.userLockFailed.type,
    })
  );
};
export const toggleSupervisor = (id) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: `${url}/level/${id}`,
      method: 'PUT',
      onSuccess: User.actions.userLockSucceed.type,
      onStart: User.actions.userLockRequested.type,
      onError: User.actions.userLockFailed.type,
    })
  );
};
export const editUser = (userData) => (dispatch, getState) => {
  dispatch(
    action.apiCallBegan({
      url: url + `/${userData._id}`,
      data: { user: userData },
      method: 'PUT',
      onSuccess: User.actions.userEdited.type,
      onStart: User.actions.editUserRequest.type,
      onError: User.actions.usersRequestFailed.type,
    })
  );
};

export const addEstablishment = (data) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      //url: url + `/establishments`,
      url: url + `/test`,
      data,
      method: 'PUT',
      onSuccess: User.actions.establishmentAdded.type,
      onStart: User.actions.establishmentAddRequest.type,
      onError: User.actions.establishmentAddFailed.type,
    })
  );
};
export const removeEstablishment = (data) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url: url + `/establishments`,
      data,
      method: 'DELETE',
      onSuccess: User.actions.establishmentRemoved.type,
      onStart: User.actions.establishmentRemoveRequest.type,
      onError: User.actions.establishmentRemoveFailed.type,
    })
  );
};
export const usersList = (state) => state.users;
export default User.reducer;
