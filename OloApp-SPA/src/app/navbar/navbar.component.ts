import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // kapag kukuha tayo info sa template
  // gawa tayo var: type = {};
  // object variable yan.
  modelOLO: any = {};
  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.modelOLO);
  }
}
