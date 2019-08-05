import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  userRequest: ['username'],
  userSuccess: ['user', 'repos'],
  userFailure: null,
})

const INITIAL_STATE = {
  user: null,
  repos: [],
  isFetching: false,
}

const userRequest = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  repos: [],
  user: null,
})
const userSuccess = (state = INITIAL_STATE, { user, repos }) => ({
  ...state,
  isFetching: false,
  repos,
  user,
})
const userFailure = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: false,
})

export default createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: userRequest,
  [Types.USER_SUCCESS]: userSuccess,
  [Types.USER_FAILURE]: userFailure,
})
