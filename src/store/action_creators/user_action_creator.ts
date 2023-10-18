import { ISetUser, ISignIn, ISignUp, ISignUpSuccess } from "../../types/types";
import { SET_USER, SIGN_IN, SIGN_UP } from "../action-types";
import { put, takeEvery } from 'redux-saga/effects'

const signUp = (user: ISignUp) => ({
  type: SIGN_UP,
  user,
})

const signIn = (user: ISignIn) => ({
  type: SIGN_IN,
  user,
})

const setUser = (userInfo: ISetUser | null) => ({
  type: SET_USER,
  userInfo
})

function* fetchSignIn(action: any) {
  const response: Response = yield fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.user)
  })
  const data: ISignUpSuccess = yield response.json();
  if (response.status === 200) {
    localStorage.setItem('access', `${data.token}`);
    window.location.pathname = '/cards'
  }
}

function* fetchSignUp(action: any) {
  const response: Response = yield fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.user)
  })
  const data: ISignUpSuccess = yield response.json()
  if (response.status === 200) {
    // window.location.pathname = '/'
    localStorage.setItem('access', `${data.token}`);
    yield put(setUser(action.user))
  }
}

function* watcherUser() {
  yield takeEvery(SIGN_UP, fetchSignUp)
  yield takeEvery(SIGN_IN, fetchSignIn)
}

export { 
  watcherUser,
  signUp,
  signIn,
  setUser
}