import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer: {id: 1, name: 'Tom', email: 'test@test.com', state: 'US'}, total: 230, placed: new Date(2019, 12, 10), completed: new Date(2019, 12, 11)},
    {id: 2, customer: {id: 1, name: 'Tom', email: 'test@test.com', state: 'US'}, total: 230, placed: new Date(2019, 12, 10), completed: new Date(2019, 12, 11)},
    {id: 3, customer: {id: 1, name: 'Tom', email: 'test@test.com', state: 'US'}, total: 230, placed: new Date(2019, 12, 10), completed: new Date(2019, 12, 11)},
    {id: 4, customer: {id: 1, name: 'Tom', email: 'test@test.com', state: 'US'}, total: 230, placed: new Date(2019, 12, 10), completed: new Date(2019, 12, 11)},
    {id: 5, customer: {id: 1, name: 'Tom', email: 'test@test.com', state: 'US'}, total: 230, placed: new Date(2019, 12, 10), completed: new Date(2019, 12, 11)},
    {id: 6, customer: {id: 1, name: 'Tom', email: 'test@test.com', state: 'US'}, total: 230, placed: new Date(2019, 12, 10), completed: new Date(2019, 12, 11)}
  ];

  ngOnInit() {
  }

}
