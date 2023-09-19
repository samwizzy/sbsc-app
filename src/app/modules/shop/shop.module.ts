import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductsComponent } from './products/products.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EllipsisPipe } from 'src/app/core/pipes/ellipsis.pipe';
import { ProductViewComponent } from './product-view/product-view.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    ShippingComponent,
    BillingComponent,
    CheckoutComponent,
    EllipsisPipe,
    ProductViewComponent,
    HeaderComponent,
    CartComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class ShopModule {}
