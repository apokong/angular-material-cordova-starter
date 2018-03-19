import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../animations/routerTransition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
