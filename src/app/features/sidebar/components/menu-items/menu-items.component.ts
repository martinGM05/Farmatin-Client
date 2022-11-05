import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  menuItems = {
    Inicio: { title: 'Inicio', url: '/home', icon: 'pi-home' },
    Ventas: { title: 'Ventas', url: '/sales', icon: 'pi-money-bill' },
    Proveedores: [
      { title: 'Proveedores', url: '/providers', icon: 'pi-users' },
      { title: 'Compras', url: '/providers/purchases', icon: 'pi-shopping-bag' },
    ],
    Productos: { title: 'Productos', url: '/products', icon: 'pi-truck' },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
