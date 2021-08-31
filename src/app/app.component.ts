import { Component,ElementRef, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  sw = true;
  data = [1,2,3,4,5,6,7,8,9];

  color: string;
  personASub:Subscription;
  video = 1;
  tictock = new BehaviorSubject(this.video);

  @ViewChild('myDiv1') myDiv1: ElementRef;
  @ViewChild('myDiv2') myDiv2: ElementRef;
  @ViewChild('myCompMichael') myCompMichael: any;

  constructor(){
    this.pure(2,3);
    this.pure(10,2);
    this.pure(5,5);

    this.impure(2,3);
    this.impure(10,2);
    this.impure(5,5);
    
  }
  pure(a:number , b :number){
    console.log(a+b)
    return a +b;
  }
  impure(a:number , b :number){
    const aux = Math.random();
    console.log(a+ b + a)
    return a +b + aux;
  }
  onAddVideo(){
    this.video ++
    this.tictock.next(this.video);    
  }

  person1Unsubscribe(){
     this.personASub.unsubscribe();
     console.log('PERSON A SE DESUSCRIBE')
  }

  printDataMichaelComp(event: any) {
    console.log('RICARDO COMP:', event);
  }
  printData(event){
    console.log('CHILD COMP SEND DATA: ', event);
  }
  test(event){
    console.log('Mouse leave: ', event);
  }
  onShowLocalVars(){
    console.log(this.myDiv1, this.myDiv2, this.myCompMichael);
  
    this.myCompMichael.onClickTest();
    this.myDiv2.nativeElement.value = 'Michael';
    this.myDiv1.nativeElement.style="border: 10px blue solid;";
  }
}
