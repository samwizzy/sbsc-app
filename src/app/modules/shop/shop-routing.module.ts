import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BillingComponent } from './billing/billing.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      { path: '', component: ProductsComponent },

      // { path: 'checkout', component: CheckoutComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'cart', component: CartComponent },
      // { path: 'billing', component: BillingComponent },
      // { path: 'thank-you', component: ThankYouComponent },
      { path: ':id', component: ProductViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
