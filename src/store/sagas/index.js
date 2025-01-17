import { all, takeLatest } from 'redux-saga/effects'
import { userRequest } from './user'
import { Types as UserTypes } from '../ducks/user'

export default function* root() {
  return yield all([
    takeLatest(UserTypes.USER_REQUEST, userRequest),
  ])
}
