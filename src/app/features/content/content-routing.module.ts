import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'sales',
        component: SalesComponent
      },
      {
        path: 'providers',
        children: [
          { path: '', component: ProvidersComponent },
          { path: 'purchases', component: PurchasesComponent },
        ]
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
