import { Component, OnInit } from '@angular/core';
import { ApptService } from '../appt.service';
import { Router } from '@angular/router';
import { Appt } from '../appt';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  patient;
  newAppt = new Appt();

  constructor(private _apptService: ApptService, private _router: Router) 
  { 
    this.patient = this._apptService.currentUser;
    console.log('CreateComponent - patient name is: ', this.patient)
  }

  ngOnInit() {
  }

  createAppt(){
    console.log(this.newAppt);
    this.newAppt.patient = this.patient;
    console.log(this.newAppt);
    this._apptService.addAppt(this.newAppt);
    this._router.navigate(['/home']);
  }

  cancel(){
    this.newAppt = new Appt;
    this._router.navigate(['/home']);
  }
// closing curly brace, don't delete!
}
