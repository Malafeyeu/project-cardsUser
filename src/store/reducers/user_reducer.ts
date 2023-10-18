import { IUserData, IUserState } from "../../types/types"
import { SET_USER } from "../action-types"

const initialState = {
  user: {} as IUserData
}

const cacheState = () => {
  const userInfoToken = localStorage.getItem('id')//it'll be 'token' but Api isn't working correctly
  return userInfoToken ? JSON.parse(userInfoToken) : initialState;
}

export default (state: IUserState = cacheState(), action: any) => {
  switch (action.type) {
    case SET_USER: {
      return ({
        ...state,
        user: action.userInfo
      })
    }
    default: return state
  }
}