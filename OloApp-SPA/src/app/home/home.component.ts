import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  registerToggle() {
    this.registerMode = true;
  }
  getValues() {
    this.http.
    get('http://localhost:5000/api/values').
    subscribe(variableToStoreData => {this.values = variableToStoreData;
                                      console.log(variableToStoreData); },
      error => {
        console.log(error);
      });
  }
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
