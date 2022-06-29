import { Component, OnInit } from '@angular/core';
import {SharedService} from './../../../shared.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  clickEventSubscription: Subscription;
  count: number =0;

  constructor(private sharedService: SharedService) { 
   
    this.clickEventSubscription = this.sharedService.ClickEvent()
                                                    .subscribe(()=>{

      this.incrementCount();

    })

  }

  ngOnInit(): void {
  }

 
  incrementCount(){
this.count++;
  }

}
