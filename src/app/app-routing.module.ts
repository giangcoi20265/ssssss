import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { ProductComponent } from './pages/product/product.component';
import { ProducteditComponent } from './component/Productedit/productedit/productedit.component';
import { NotfoundComponent } from './pages/page-not-found/notfound/notfound.component';
import { ProducAddComponent } from './component/ProductAdd/produc-add/produc-add.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'products',component:ProductlistComponent},
 
  {path:'admin', component:LayoutAdminComponent, children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboradComponent},
    {path:'product',component:ProductComponent},
    {path:'product/:id/edit',component:ProducteditComponent},
    {path:'productAdd',component:ProducAddComponent}
  
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
