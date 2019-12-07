import { Component, OnInit } from '@angular/core';
import { products } from '../assets/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}