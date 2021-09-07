import { Component, Input, OnInit } from '@angular/core';
import { StrToDatePipe } from './str-to-date.pipe';

@Component({
  selector: 'app-transaction',
  template:`
  <div [style.background]="mineType === 'PoW'? 'yellow' : 'green'"
  style="float: left; margin: 10px; padding: 10px;">

<p>date: {{date }}</p>
<p>From: {{from}}</p>
<p>To: {{to}}</p>
<p>Quantity: {{quantity}}</p>
<p>MoneyType: {{moneyType | uppercase}}</p>
<p>MineType: {{mineType}}</p>
<p>Miner: {{miner}}</p>

<ng-content></ng-content>


</div>

`,
})
export class TransComponent implements OnInit {
  //<p>date: {{ (transaction.date | strToDate)|date:'dd/MM/yyyy' }}</p>
  
  @Input() id;
  @Input() date;
  @Input() from;
  @Input() to;
  @Input() quantity;
  @Input() moneyType;
  @Input() mineType;
  @Input() miner;

  constructor() { }
  

  ngOnInit() {
  }

}