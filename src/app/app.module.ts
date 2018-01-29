import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { RevolutionComponent } from './components/revolution/revolution.component';
import { SearchComponent } from './components/modal/search/search.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { AddWishListComponent } from './components/modal/add-wish-list/add-wish-list.component';
import { AddCartComponent } from './components/modal/add-cart/add-cart.component';
import { CompareBoxComponent } from './components/compare-box/compare-box.component';
import { BreadcrumbsComponent } from './components/layout/breadcrumbs/breadcrumbs.component';
import { QuickViewComponent } from './components/modal/quick-view/quick-view.component';
import { AppRoutingModule }     from './app-routing.module';
import { ProductComponent } from './components/product/product.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ListingComponent } from './components/listing/listing.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { EmptyComponent } from './components/shopping-cart/empty/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    RevolutionComponent,
    SearchComponent,
    PreloaderComponent,
    AddWishListComponent,
    AddCartComponent,
    CompareBoxComponent,
    BreadcrumbsComponent,
    QuickViewComponent,
    ProductComponent,
    WishListComponent,
    ShoppingCartComponent,
    ListingComponent,
    ContactComponent,
    CheckoutComponent,
    AboutComponent,
    LoginComponent,
    CreateAccountComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
