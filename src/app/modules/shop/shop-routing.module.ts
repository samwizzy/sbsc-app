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
    path: 'test',
    loadChildren: () => import('./test/test.module').then((m) => m.TestModule),
  },
  {
    path: '',
    component: ShopComponent,
    children: [
      // { path: 'checkout', component: CheckoutComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'cart', component: CartComponent },
      // { path: 'billing', component: BillingComponent },
      // { path: 'thank-you', component: ThankYouComponent },

      { path: ':id', component: ProductViewComponent },
      { path: '', component: ProductsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
