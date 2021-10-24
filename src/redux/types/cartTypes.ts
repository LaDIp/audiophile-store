type ProductCart = {
  product: Product
  count: number
}

export type cartState = {
  products: Array<ProductCart>
}

export enum CartActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  CHANGE_PRODUCT = 'CHANGE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
  DELETE_CART = 'DELETE_CART',
}

type addProductAction = {
  type: CartActionTypes.ADD_PRODUCT
  payload: {
    count: number
    product: Product
  }
}

type changeProductAction = {
  type: CartActionTypes.CHANGE_PRODUCT
  payload: {
    id: number
    count: number
  }
}

type deleteProductAction = {
  type: CartActionTypes.DELETE_PRODUCT
  payload: number
}

type deleteCartAction = {
  type: CartActionTypes.DELETE_CART
}

export type CartAction =
  | addProductAction
  | changeProductAction
  | deleteProductAction
  | deleteCartAction
