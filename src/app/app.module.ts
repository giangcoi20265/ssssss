import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { ProductComponent } from './pages/product/product.component';
import { ProducteditComponent } from './component/Productedit/productedit/productedit.component';
import { NotfoundComponent } from './pages/page-not-found/notfound/notfound.component';
import { ProducAddComponent } from './component/ProductAdd/produc-add/produc-add.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductlistComponent,
    ProductdetailComponent,
    ProductItemComponent,
    HomepageComponent,
    DashboradComponent,
    LayoutAdminComponent,
    ProductComponent,
    ProducteditComponent,
    NotfoundComponent,
    ProducAddComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
