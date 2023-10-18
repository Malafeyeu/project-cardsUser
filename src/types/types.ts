
interface ITitle {
  title: string;
}

interface ISignUp {
  email: string,
  password: string,
}

interface ISignIn {
  email: string,
  password: string,
}

interface IUserData {
  id: string,
  access: string
}

interface IUserState {
  user: IUserData
}

interface ISignUpSuccess {
  id: string,
  token: string
}

interface ISignInSuccess {
  token: string
}

interface ISetUser {
  username: string,
  id: number,
  email: string
}

interface ICardsInfo {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

interface ICardsResponse {
  page: number,
  data: ICardsInfo[]
}

interface ICardsState {
  cards: ICardsInfo[]
}

interface IStoreState {
  cards: ICardsState,
  user: IUserState
}

export {
  type ITitle,
  type ISignUp,
  type IUserState,
  type IUserData,
  type ISignUpSuccess,
  type ISignIn,
  type ISignInSuccess,
  type ISetUser,
  type ICardsInfo,
  type ICardsResponse,
  type ICardsState,
  type IStoreState
}