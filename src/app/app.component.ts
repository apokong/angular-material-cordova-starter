import { Component, OnInit } from '@angular/core';
import * as FastClick from 'fastclick';
import { routerTransition } from './animations/routerTransition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],
})

export class AppComponent implements OnInit{
  constructor(
  ) { }

  ngOnInit() {
    document.addEventListener('deviceready', function() {
      FastClick.attach(document.body);
    }, false); 
  } 
  
  setRouteTransition(outlet) {
    return outlet.activatedRouteData.state;
  }
 }