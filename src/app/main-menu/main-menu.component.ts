import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  categories = categories;
  constructor() { }

  ngOnInit() {
  }

}
