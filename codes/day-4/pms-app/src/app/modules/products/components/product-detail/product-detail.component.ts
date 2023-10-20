import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductServiceContract } from '../../models/product-service-contract';
import { PRODUCT_SERVICE } from 'src/app/config/constants';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product?: Product;
  isRequestComplete = false
  errorMessage = ''

  private getProductSubscription?: Subscription;

  constructor(
    private storageSvc: StorageService,
    private currentRoute: ActivatedRoute,
    private routerSvc: Router,
    @Inject(PRODUCT_SERVICE.SERVICE_TOKEN) private svc: ProductServiceContract
  ) {

  }

  editProduct() {
    if (this.product) {
      this.storageSvc.publish(this.product)
      this.routerSvc.navigate(['/products/update'])
    } else {

    }
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    // Number(snapshot.params['id'])
    //+(snapshot.params['id'])
    const id = parseInt(snapshot.params['id'])

    this.getProductSubscription = this.svc.getProduct(id).subscribe({
      next: (resp) => {
        if (resp.data != null) {
          this.product = resp.data
          this.isRequestComplete = true
          this.errorMessage = ''
        } else {
          this.product = undefined
          this.isRequestComplete = true
          this.errorMessage = resp.message
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
  ngOnDestroy(): void {
    this.getProductSubscription?.unsubscribe()
  }
}
