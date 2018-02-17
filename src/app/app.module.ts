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
import { MyaccountComponent } from './components/layout/header/setting/myaccount/myaccount.component';
import { LanguageComponent } from './components/layout/header/setting/language/language.component';
import { CurrencyComponent } from './components/layout/header/setting/currency/currency.component';
import { HeaderDropdownsComponent } from './components/layout/header/header-dropdowns/header-dropdowns.component';
import { LogoComponent } from './components/layout/header/logo/logo.component';
import { SettingComponent } from './components/layout/header/setting/setting.component';
import { ShoppingCartDropdownComponent } from './components/layout/header/shopping-cart-dropdown/shopping-cart-dropdown.component';
import { MenuLargeComponent } from './components/layout/header/menu-large/menu-large.component';
import { MenuSmallComponent } from './components/layout/header/menu-small/menu-small.component';
import { OuterAnimationComponent } from './components/content/outer-animation/outer-animation.component';
import { ProductsComponent } from './components/content/products/products.component';
import { CategoriesComponent } from './components/content/categories/categories.component';
import { BlogComponent } from './components/content/blog/blog.component';
import { BrandsComponent } from './components/content/brands/brands.component';
import { BrandComponent } from './components/content/brands/brand/brand.component';
import { CategoryComponent } from './components/content/categories/category/category.component';
import { ProductItemComponent } from './components/content/products/product-item/product-item.component';
import { NewComponent } from './components/content/products/product-item/new/new.component';
import { SaleComponent } from './components/content/products/product-item/sale/sale.component';
import { PreviewInfoComponent } from './components/content/products/product-item/preview-info/preview-info.component';
import { PriceComponent } from './components/content/products/product-item/price/price.component';
import { ColorOptionsComponent } from './components/content/products/product-item/color-options/color-options.component';
import { AddItemComponent } from './components/content/products/product-item/add-item/add-item.component';
import { CountDownComponent } from './components/content/products/product-item/count-down/count-down.component';
import { OutStockComponent } from './components/content/products/product-item/out-stock/out-stock.component';
import { ProductImageComponent } from './components/content/products/product-item/product-image/product-image.component';
import { ProductRatingComponent } from './components/content/products/product-item/product-rating/product-rating.component';
import { IconAddTocartComponent } from './components/content/products/product-item/icon-add-tocart/icon-add-tocart.component';
import { IconQuickviewComponent } from './components/content/products/product-item/icon-quickview/icon-quickview.component';
import { TitleComponent } from './components/content/products/product-item/title/title.component';
import { BottomComponent } from './components/layout/footer/bottom/bottom.component';
import { SettingsComponent } from './components/layout/footer/settings/settings.component';
import { SubscribeComponent } from './components/layout/footer/subscribe/subscribe.component';
import { ColumnLinksComponent } from './components/layout/footer/column-links/column-links.component';
import { LinksComponent } from './components/layout/footer/links/links.component';




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
    EmptyComponent,
    MyaccountComponent,
    LanguageComponent,
    HeaderDropdownsComponent,
    LogoComponent,
    CurrencyComponent,
    SettingComponent,
    ShoppingCartDropdownComponent,
    MenuLargeComponent,
    MenuSmallComponent,
    OuterAnimationComponent,
    ProductsComponent,
    CategoriesComponent,
    BlogComponent,
    BrandsComponent,
    BrandComponent,
    CategoryComponent,
    ProductItemComponent,
    NewComponent,
    SaleComponent,
    PreviewInfoComponent,
    PriceComponent,
    ColorOptionsComponent,
    AddItemComponent,
    CountDownComponent,
    OutStockComponent,
    ProductImageComponent,
    ProductRatingComponent,
    IconAddTocartComponent,
    IconQuickviewComponent,
    TitleComponent,
    BottomComponent,
    SettingsComponent,
    SubscribeComponent,
    ColumnLinksComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
