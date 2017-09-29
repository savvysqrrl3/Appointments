import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  BehaviorSubject } from 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class ApptService {

  constructor(private _http: Http) { }
  currentUser = "";
  apptList = [];
  Observer = new BehaviorSubject(this.apptList);



  addAppt(newAppt){
    console.log("Arrived at service and data is", newAppt)
  this._http.post('/appts', newAppt)
  .subscribe(
    (response) => {
      console.log("returned to Angular service");
      this.retrieveAll();
    },
    (err) => {
      console.log("failed to add appt", err)
    }
  )  
  }
  // end of addAppt function

  retrieveAll() {
    return this._http.get('/listappts')
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.apptList = response.json();
        this.Observer.next(this.apptList);
      },
      (err) => {
        console.log("failed to retrieve all", err.json )
      }
    )
  }
// end of retrieveAll function

  removeAppt(id){
    console.log("At services and id is:", id);
    this._http.delete(`/appts/${id}`)
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.apptList = response.json();
        this.Observer.next(this.apptList);
      },
      (err) => {
        console.log("failed to remove appt", err.json )
      }
    )
  }
  // end of removeItem function

  updateSomething(id, param2, param3){
    this._http.put(`/appts/${id}`, {param2: param2, param3: param3})
    .subscribe (
      (response) => {
        console.log("success", response.json() );
        this.apptList = response.json();
        this.Observer.next(this.apptList);
      },
      (err) => {
        console.log("failed to update item", err.json )
      }
    )
  }
  // end of update function

// this is the closing brace for export class; don't overwrite!
}
