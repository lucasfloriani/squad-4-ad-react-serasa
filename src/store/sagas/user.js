import { put, call } from 'redux-saga/effects'
import { Creators as AlertActions } from '../ducks/alert'
import { Creators as UserActions } from '../ducks/user'
import api from '../../services'

export function* userRequest({ username }) {
  try {
    const userResponse = yield call(api.get, `/users/${username}`)
    const reposFromUserResponse = yield call(api.get, `/users/${username}/repos`)
    const user = userResponse.data
    const repos = reposFromUserResponse.data
    yield put(UserActions.userSuccess(user, repos))
  } catch (err) {
    console.log('SAGA USER ERR: ', err)
    yield put(UserActions.userFailure())
    yield put(AlertActions.createErrorAlert('Erro ao buscar o usuário do github, tente novamente mais tarde'))
  }
}
