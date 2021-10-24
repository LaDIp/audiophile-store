import { CartActionTypes } from '../types/cartTypes'

const addProductAction = (payload: { count: number; product: Product }) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
})
const changeProductAction = (payload: { id: number; count: number }) => ({
  type: CartActionTypes.CHANGE_PRODUCT,
  payload,
})

const deleteProductAction = (payload: number) => ({
  type: CartActionTypes.DELETE_PRODUCT,
  payload,
})
const deleteCartAction = () => ({
  type: CartActionTypes.DELETE_CART,
})

export {
  addProductAction,
  changeProductAction,
  deleteProductAction,
  deleteCartAction,
}
