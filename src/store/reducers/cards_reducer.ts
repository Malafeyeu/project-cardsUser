import { ICardsInfo, ICardsState } from "../../types/types"
import { SET_CARD } from "../action-types"

const initialState = {
  cards: [] as ICardsInfo[]
}

export default (state: ICardsState = initialState, action: any) => {
  switch (action.type) {
    case SET_CARD: {
      return ({
        ...state,
        cards: action.payload
      })
    }
    default: return state
  }
}