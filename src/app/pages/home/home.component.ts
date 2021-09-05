import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../login/services/singleton.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private singletonService: SingletonService) { }

  ngOnInit() {
  }
  onShowMessage():void{
    console.log(this.singletonService.getMessage());
  }

}
