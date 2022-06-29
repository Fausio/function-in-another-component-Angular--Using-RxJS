import { Component, OnInit } from '@angular/core';
import {SharedService} from './../../../shared.service'


@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }


  ClickMe() {
this.sharedService.SendClickEvent();
}
}