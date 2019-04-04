import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css']
})
export class RxjsLearnComponent implements OnInit {
  value: any = {};
  constructor() {}

  ngOnInit() {}
}
