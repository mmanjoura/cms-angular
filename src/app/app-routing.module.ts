import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ListingComponent } from './components/listing/listing.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent }  from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { EmptyComponent } from './components/shopping-cart/empty/empty.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'product', component: ProductComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent},
  { path: 'listing', component: ListingComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'sign', component: LoginComponent},
  { path: 'createaccount', component: CreateAccountComponent},
  { path: 'emptycart', component: EmptyComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}