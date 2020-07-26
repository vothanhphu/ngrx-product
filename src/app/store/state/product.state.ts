import { Product } from '../../models/product';

export interface IProductState {
  products: Product[];
  selectedProduct: Product
}

export const initialProductState: IProductState = {
  products: null,
  selectedProduct: null
}
