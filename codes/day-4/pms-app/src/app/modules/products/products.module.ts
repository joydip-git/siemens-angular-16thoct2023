import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { PRODUCT_SERVICE } from 'src/app/config/constants';
import { FilterComponent } from './components/filter/filter.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { SortProductPipe } from './pipes/sort-product.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    UpdateProductComponent,
    FilterComponent,
    FilterProductPipe,
    SortProductPipe
  ],
  imports: [
    CommonModule, HttpClientModule, ProductsRoutingModule
  ],
  providers: [
    {
      provide: PRODUCT_SERVICE.SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE.SERVICE_TYPE
    },
    StorageService
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
