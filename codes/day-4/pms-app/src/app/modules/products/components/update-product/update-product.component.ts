import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit, OnDestroy {

  product?: Product;
  isRequestComplete = false
  errorMessage = ''
  private getProductSubscription?: Subscription;

  constructor(private storageSvc: StorageService) {

  }

  ngOnDestroy(): void {
    this.getProductSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.getProductSubscription =
      this.storageSvc.get()?.subscribe({
        next: (p) => {
          if (p) {
            this.product = p
            this.isRequestComplete = true
            this.errorMessage = ''
          } else {
            this.product = undefined
            this.isRequestComplete = true
            this.errorMessage = 'no product found'
          }
        },
        error: (err) => {
          this.product = undefined
          this.isRequestComplete = true
          this.errorMessage = err.message
        },
        complete: () => { }
      })
  }


}
