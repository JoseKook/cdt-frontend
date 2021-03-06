import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/productos'
        },
        {
            label: 'Plazos',
            icon: 'pi pi-fw pi-dollar',
            routerLink: '/plazos'
        },
        {
            label: 'Cotización',
            icon: 'pi pi-fw pi-check-square',
            routerLink: '/contizacion'
        }

    ];
  }

}
