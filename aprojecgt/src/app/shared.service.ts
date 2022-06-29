import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {




  //#region "My Region"
  private subject = new Subject<any>()

  SendClickEvent() {
    this.subject.next();
  }

  ClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

 //#endregion "My Region"
}

