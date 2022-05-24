import { createSlice } from '@reduxjs/toolkit'

// Core components that
import * as action from './api'
// import shouldFetch from '../hooks/shouldFetch'

const url = '/tester'

const initialState = {
  loading: false,
  data: [],
  lastFetch: null,
  error: null,
}

export const Testers = createSlice({
  name: 'testers',
  initialState,
  reducers: {
    testersRequested: (state) => {
      state.loading = true
    },
    testersRequestedSucceed: (state, action) => {
      console.log('success in finding tester')
      console.log(action)
      console.log(action.payload)
      state.loading = false
      state.data = action.payload
      state.lastFetch = Date.now()
    },

    testersRequestedFailed: (state) => {
      state.loading = false
      state.data = []
    },
    testersPostRequested: (state) => {
      state.loading = true
    },

    testersPostRequestedSucceed: (state, action) => {
      console.log('In here man')
      state.loading = false
      state.data.push(action.payload)
    },
    testersPostRequestedFailed: (state, action) => {
      state.loading = false
      state.data = []
    },
    testersLockRequested: (state) => {
      state.loading = true
    },
    testersLockRequestedSucceed: (state, action) => {
      state.loading = false
      state.data = state.data.map((transaction) => {
        const index = action.payload.findIndex(
          (tran) => tran._id === transaction._id
        )
        if (index > -1) return action.payload[index]
        return transaction
      })
    },
    emailedSentRequested: (state, action) => {
      state.loading = true
    },
    emailedSentSuccess: (state, action) => {
      state.loading = false

      state.data = state.data.map((tester) => {
        if (tester._id === action.payload._id) return action.payload
        return tester
      })
    },
    emailedSentFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    testersLockRequestedFailed: (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.payload
    },
  },
})

export const sendEmail = (userDetails) => (dispatch) => {
  console.log('sending an email')
  dispatch(
    action.apiCallBegan({
      url: `${url}/${userDetails._id}?action=sendmail`,
      data: userDetails,
      method: 'PATCH',
      onStart: Testers.actions.emailedSentRequested.type,
      onError: Testers.actions.emailedSentFailed.type,
      onSuccess: Testers.actions.emailedSentSuccess.type,
    })
  )
}

export const lockTransaction = (date) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url,
      data: date,
      method: 'PUT',
      onSuccess: Testers.actions.testersLockRequestedSucceed.type,
      onStart: Testers.actions.testersLockRequested.type,
      onError: Testers.actions.testersLockRequestedFailed.type,
    })
  )
}
export const postTransaction = (transactionDetails) => (dispatch) => {
  dispatch(
    action.apiCallBegan({
      url,
      data: transactionDetails,
      method: 'POST',
      onSuccess: Testers.actions.testersPostRequestedSucceed.type,
      onStart: Testers.actions.testersPostRequested.type,
      onError: Testers.actions.testersPostRequestedFailed.type,
    })
  )
}
export const getTesters = () => (dispatch, getState) => {
  // const { lastFetch, loading } = getState().testers

  // if (loading) return
  // if (lastFetch) if (!shouldFetch(lastFetch)) return
  dispatch(
    action.apiCallBegan({
      url,
      data: [],
      method: 'GET',
      onSuccess: Testers.actions.testersRequestedSucceed.type,
      onStart: Testers.actions.testersRequested.type,
      onError: Testers.actions.testersRequestedFailed.type,
    })
  )
}

export const testers = (state) => state.testers

export default Testers.reducer
