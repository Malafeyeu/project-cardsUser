import { put, takeEvery } from "redux-saga/effects";
import { ICardsInfo, ICardsResponse } from "../../types/types";
import { LOAD_CARD, SET_CARD } from "../action-types";

const setCards = ( payload: ICardsInfo[]) => ({
  type: SET_CARD,
  payload
})

const loadCards = () => ({
  type: LOAD_CARD
})

function* fetchCards() {
  const response_first: Response = yield fetch('https://reqres.in/api/users?delay=3');
  const response_second: Response = yield fetch('https://reqres.in/api/users?page=2');
  const data1: ICardsResponse = yield response_first.json();
  const data2: ICardsResponse = yield response_second.json();
  const resData = data1.data.concat(data2.data)
  yield put(setCards(resData))
}

function* watcherCard() {
  yield takeEvery(LOAD_CARD, fetchCards)
}
export {
  setCards,
  fetchCards,
  watcherCard,
  loadCards
}