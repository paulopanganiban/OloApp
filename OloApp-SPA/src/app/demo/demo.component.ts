import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { KeyValuePipe } from '@angular/common';
import { Subject, Subscription, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, mergeMap, delay } from 'rxjs/operators';
import BarcodeScanner from 'simple-barcode-scanner';
export interface Products {
  sku: string;
}

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  value = 0;
  value2 = 'h';
  arrayMeDaddy = [];
  scanner = BarcodeScanner();
  constructor() { }
  ngOnInit() {
    this.scanner.on(data => { console.log(data); this.arrayMeDaddy.push(data); });
  }
  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: any ) {
  //   console.log(event);
  //   this.value2 = event.target.value;
  //   console.log(this.value2);


  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   console.log(event);

  //   if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
  //     this.increment();
  //   }

  //   if (event.keyCode === KEY_CODE.LEFT_ARROW) {
  //     this.decrement();
  //   }
  // }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
}
