import { Component, OnInit } from '@angular/core';
import {MockData} from "../../../data/MockData";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  data = MockData;
  constructor() { }

  ngOnInit() {
  }

}
