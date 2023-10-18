import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import user_reducer from "./reducers/user_reducer";
import cards_reducer from "./reducers/cards_reducer";
import { all } from "redux-saga/effects";
import { watcherUser } from "./action_creators";
import { watcherCard } from "./action_creators/cards_action_creator";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherUser(),
    watcherCard()
  ])
}

const store = createStore(combineReducers({
  cards: cards_reducer,
  user: user_reducer,
}), applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);

export { store }