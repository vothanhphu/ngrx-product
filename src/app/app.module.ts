import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './././store/reducer/product.reducer'; 
import { ProductComponent } from './components/product/product.component';
import { ProductDetailomponent } from './components/product.detail/product.detail.componentt';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ products: ProductReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
