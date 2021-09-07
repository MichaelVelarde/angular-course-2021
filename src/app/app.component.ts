import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalETH = 0;
  totalBTC = 0;
  wallets = [];
  transactions = [];
  constructor(private firebase: FirebaseService) {
    this.firebase.getAllWallets().subscribe(data => this.getDataWallets(data));
    this.firebase.getAllTrans().subscribe(data => this.getDataTrans(data));
  }
  getDataWallets(data) {
    this.wallets = Object.entries(data);
    console.log(data );
  }
  getDataTrans(data) {
    this.transactions = Object.entries(data);
    console.log(data);
  }

  setTotalETH() {
    this.totalETH = 0;
    for (let i = 0; i < this.wallets.length; i++) {
      this.totalETH += this.wallets[i][1]['eth'];
    }
    return this.totalETH;
  }
  setTotalBTC() {
    this.totalBTC = 0;
    for (let i = 0; i < this.wallets.length; i++) {
      this.totalBTC += this.wallets[i][1]['btc'];
    }
    return this.totalBTC;
  }
  allTransactionDone() {
    for (let i = 0; i < this.transactions.length; i++) {
      if(this.transactions[i][1]['minetype'] != 'PoS' && this.transactions[i][1]['miner'] > 20)
        return false;
      }
    return true;
  }
  delete(id){
    this.firebase.delete(id).subscribe(
      res => console.log(res, 'Para ver los cambios porfavor resetee la pagina'))
  }
  patch(id, monto, tipo) {
    if (tipo === 'eth')
      this.firebase.patch(id,{
        "eth" : monto,
      } ).subscribe(
        res => console.log(res, 'Para ver los cambios porfavor resetee la pagina'))
    else
      this.firebase.patch(id,{
        "btc": monto,
      } ).subscribe(
        res => console.log(res, 'Para ver los cambios porfavor resetee la pagina'))
  }
  onMine(idTrans){
    for (let i = 0; i < this.transactions.length; i++) {
      if(idTrans === this.transactions[i][0]){
      for (let i2 = 0; i2 < this.wallets.length; i2++) {
        if (this.wallets[i2][1]['wallet'] === this.transactions[i][1]['from']){
          var Fromidwallet  = this.wallets[i2][0];
          if (this.transactions[i][1]['moneyType'] === 'eth') {
            var montoFrom  = this.wallets[i2][1]['eth'];
            var tipoFrom = 'eth';
            montoFrom -= this.transactions[i][1]['quantity'];
          }else {
            var montoFrom  = this.wallets[i2][1]['btc'];
            var tipoFrom = 'btc';
            montoFrom -= this.transactions[i][1]['quantity'];
          }
        }  
      }
      for (let i2 = 0; i2 < this.wallets.length; i2++) {
        if (this.wallets[i2][1]['wallet'] === this.transactions[i][1]['to']){
          var Toidwallet  = this.wallets[i2][0];
          if (this.transactions[i][1]['moneyType'] === 'eth') {
            var montoTo  = this.wallets[i2][1]['eth'];
            var tipoTo = 'eth';
            montoTo += this.transactions[i][1]['quantity'];
          }else {
            var montoTo  = this.wallets[i2][1]['btc'];
            var tipoTo = 'btc';
            montoTo += this.transactions[i][1]['quantity'];
          }
      }
    }
      
     this.patch(Fromidwallet , montoFrom , tipoFrom);
     this.patch(Toidwallet , montoTo , tipoTo);
     this.delete(idTrans);
    } 
      
    }

  }
  onTransaction(i: number) {
    this.transactions[i].mined = true;
    for (let i2 = 0; i2 < this.wallets.length; i2++) {
      if (this.wallets[i2].wallet === this.transactions[i].from) {
        if (this.transactions[i].moneyType === 'eth') {
          this.wallets[i2].eth -= this.transactions[i].quantity;
        } else this.wallets[i2].btc -= this.transactions[i].quantity;
      }
      if (this.wallets[i2].wallet === this.transactions[i].to) {
        if (this.transactions[i].moneyType === 'eth') {
          this.wallets[i2].eth += this.transactions[i].quantity;
        } else this.wallets[i2].btc += this.transactions[i].quantity;
      }
    }
  }
}
