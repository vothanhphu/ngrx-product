import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductComponent {

  products: Observable<Product[]>;

  constructor(private store: Store<{ products: Product[] }>) {
    this.products = store.pipe(select('products'));
  }
}
