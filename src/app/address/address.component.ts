import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  user : any
  constructor() {
    this.user = {
      name : 'Amay',
      address : '123, HYD',
      phone : ['647-820-8888','969-966-8855','123-456-7890']
    }
  }

  ngOnInit():void {

  }
}
