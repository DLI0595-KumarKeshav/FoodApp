import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RestaurentItemsComponent } from './pages/restaurent-items/restaurent-items.component';
import { CreateOrdersComponent } from './pages/create-orders/create-orders.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
  },{
    path:'foodCategories',
    component: CategoriesComponent
  },
  {
    path:'restaurentItems',
    component: RestaurentItemsComponent
  },
  {
    path:'createorder',
    component: CreateOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
