import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";
import { AddProductComponent } from "./components/add-product/add-product.component";


const productRoutes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: 'view/:id',
                component: ProductDetailComponent
            },
            {
                path: 'update',
                component: UpdateProductComponent
            },
            {
                path: 'add',
                component: AddProductComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {

}