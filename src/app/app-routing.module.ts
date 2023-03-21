import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {path:"product", component:ProductsComponent },
  {path:"", component:ProductsComponent },
 //{path:"supplier", component:SuppliersComponent},
  {path:"supplier", component:SuppliersComponent,canActivate:[AuthGuard]
 
 }



]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
