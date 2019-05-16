import { Component, OnInit } from '@angular/core';
import { HomeClass } from '../HomeClass';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home:HomeClass = {
    name: "Nayak"
  }
  constructor() { }

  ngOnInit() {
  }

}
