import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css']
})
export class RxjsLearnComponent implements OnInit {
  value = 'hello';
  varForTemplate = 'fuckYOU';
  // Create an Observable that will start listening to geolocation updates
  // when a consumer subscribes.
  constructor() {}

  ngOnInit() {
    this.Main();
  }
  Main() {
    const locations = new Observable((observer => {
       // Get the next and error callbacks. These will be passed in when
      // the consumer subscribes.
    }));
  }


}
