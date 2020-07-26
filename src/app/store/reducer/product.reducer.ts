import { ActionExtend, ProductActionTypes } from './../action/product.action';

export const initialState = [];

export function ProductReducer(state = initialState, action: ActionExtend) {
  switch (action.type) {
    case ProductActionTypes.Add:
      return [...state, action.payload];

    case ProductActionTypes.Edit:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];

    case ProductActionTypes.Delete:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];

    default:
      return state;
  }
}
