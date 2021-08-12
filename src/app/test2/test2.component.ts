import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input() name: string;
  @Input() lastName: string;
  @Output() onSendData = new EventEmitter(null);

  constructor() { }
  onShowData(){
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }
  ngOnInit() {
  }

}