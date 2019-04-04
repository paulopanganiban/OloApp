import { Component, OnInit } from '@angular/core';
import { Testingthyknowledge } from './testingthyknowledge';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-calendar-tracker',
  templateUrl: './calendar-tracker.component.html',
  styleUrls: ['./calendar-tracker.component.css']
})
export class CalendarTrackerComponent implements OnInit {
  itemsOLO = [];
  flag = true;
  a: number;
  b: number;
  // best practice variable to class constructor @_@
  // aka MODELS hahaha
  USEMEDADDY: string;
    // pang tanggap to sa get request mofo.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }
  createCheckbox() {
    for (let i = 1; i <= 66; i ++) {
      this.itemsOLO.push(i);
    }
  }
  constVariableExplanation(): string {
    this.messageService.add('hi');
    this.a = 1;
    this.b = 7;
    const addES6 = (x: number, y: number) => x + y;
    if (this.a === 1) {
      this.a = 11;
      const b = 77;
      console.log(`this.b = ${this.b} \n const b = ${b}`);
        // so inline function ang es6 arrow. KEWL?
      const hello: number = addES6(this.a, this.b);
      console.log(`ES6 = ${hello}`);
      return(`this.b = ${this.b} \n const b = ${b} \n` +
        `this.b = ${this.b} \n const b = ${b}`);
    }
  }

}
