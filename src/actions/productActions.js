import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR
} from '../types'

export function createNewProductAction() {
  return () => {
    console.log('from action')
  }
}