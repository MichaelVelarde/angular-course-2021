import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent{
  @Input() wallet: string;
  @Input() name: string;
  @Input() eth: number;
  @Input() btc: number;
  

  constructor() {}
  colorWallet(){
    if(this.eth + this.btc > 10){
      return true;
    }
    else return false;
  }


}