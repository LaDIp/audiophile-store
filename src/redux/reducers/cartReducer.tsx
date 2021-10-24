import { cartState, CartActionTypes, CartAction } from '../types/cartTypes'

const defaultState: cartState = {
  products: [],
}

const cartReducer = (state = defaultState, action: CartAction): cartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const isItemInCart = state.products.find(
        item => item.product.id === action.payload.product.id
      )
      if (isItemInCart) {
        return {
          ...state,
          products: state.products.map(item =>
            item.product.id === action.payload.product.id
              ? { ...item, count: item.count + action.payload.count }
              : item
          ),
        }
      }
      return {
        ...state,
        products: [
          ...state.products,
          {
            product: action.payload.product,
            count: action.payload.count,
          },
        ],
      }
    case CartActionTypes.CHANGE_PRODUCT:
      return {
        ...state,
        products: state.products.map(item =>
          item.product.id === action.payload.id
            ? { ...item, count: action.payload.count }
            : item
        ),
      }
    case CartActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          item => item.product.id !== action.payload
        ),
      }
    case CartActionTypes.DELETE_CART:
      return defaultState
    default:
      return state
  }
}

export default cartReducer
