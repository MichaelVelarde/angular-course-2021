import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { CoreModule } from './core/core.module';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';

import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { HttpClientModule } from '@angular/common/http';
import { TransComponent } from './transaction/transaction.component';
import { StrToDatePipe } from './str-to-date.pipe';


@NgModule({
  declarations: [
    AppComponent, 
    Test1Component, 
    Test2Component, 
    Test3Component,
    TransComponent,
    Directive1Directive,
    Directive2Directive,
    BitcoinComponent,
    StrToDatePipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
