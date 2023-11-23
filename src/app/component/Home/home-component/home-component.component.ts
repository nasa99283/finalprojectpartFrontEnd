import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  name: string | null;
 
  constructor() {
    this.name = "";
  }
 
  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem("currentUser") as string).name; // new
  }



}
