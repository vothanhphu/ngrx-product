import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ProductAdd } from '../../store/action/product.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product.detail.component.html',
  styleUrls: ['./product.detail.component.css']
})
export class ProductDetailomponent {

  products: Observable<Product[]>;

  constructor(private store: Store<{ products: Product[] }>) {
    this.products = store.pipe(select('products'));
  }

  AddProduct(productName: string) {
    const product = new Product();
    product.Name = productName;

    this.store.dispatch(new ProductAdd(product));
  }
} 
