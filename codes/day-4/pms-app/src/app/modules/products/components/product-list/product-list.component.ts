import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE } from 'src/app/config/constants';
import { ProductServiceContract } from '../../models/product-service-contract';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products?: Product[];
  isRequestComplete = false
  errorMessage = ''
  filterText = ''
  sortText = 'name'

  private getProductsSubscription?: Subscription;
  private deleteProductSubscription?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE.SERVICE_TOKEN) private svc: ProductServiceContract) {

  }
  updateSortText(value: string) {
    this.sortText = value
  }
  updateFilterText(value: string) {
    this.filterText = value
  }
  fetchProducts() {
    this.getProductsSubscription = this.svc.getProducts().subscribe({
      next: (resp) => {
        if (resp.data != null) {
          this.products = resp.data
          this.errorMessage = ''
          this.isRequestComplete = true
        } else {
          this.products = undefined
          this.errorMessage = resp.message
          this.isRequestComplete = true
        }
      },
      error: (err) => {
        this.products = undefined
        this.errorMessage = err.message
        this.isRequestComplete = true
      }
    })
  }

  ngOnInit(): void {
    this.fetchProducts()
  }

  deleteProduct(id: number) {
    this.deleteProductSubscription = this.svc.removeProduct(id).subscribe({
      next: (resp) => {
        if (resp.data != null) {
          this.errorMessage = ''
          this.isRequestComplete = true
          window.alert('deleted successfully')
        } else {
          this.errorMessage = ''
          this.isRequestComplete = true
          window.alert(resp.message)
        }
      },
      error: (err) => {
        //this.products = undefined
        //this.errorMessage = err.message
        this.errorMessage = ''
        this.isRequestComplete = true
        window.alert(err.message)
      },
      complete: () => {
        this.fetchProducts()
      }
    })
  }

  ngOnDestroy(): void {
    this.getProductsSubscription?.unsubscribe()
    this.deleteProductSubscription?.unsubscribe()
  }
}
