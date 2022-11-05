import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    SidebarLayoutComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DividerModule
  ],
  exports: [
    SidebarLayoutComponent
  ]
})
export class SidebarModule { }
