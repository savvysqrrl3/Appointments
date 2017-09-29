import { Component, OnInit } from '@angular/core';
import { ApptService } from '../appt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAppts = [];
  searchterms = "";
  username;
  today = new Date();
  date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

  userPrompt(){  
    while(this._apptService.currentUser == "" || this._apptService.currentUser == null){
      this._apptService.currentUser = prompt("Please enter your name.");	
    }
  };

  constructor(private _apptService: ApptService, private _router: Router) 
  {
    this._apptService.Observer.subscribe((apptList) => {
      console.log("Appts retrieved from service:", apptList);
            this.allAppts = apptList;
            console.log("Back at the component...", this.allAppts);
      
          })
          this.getAppts();
          
          console.log('HomeComponent - username is: ', this.username)
   }

  ngOnInit() {
    this.userPrompt();
    this.username = this._apptService.currentUser;
  }
  getAppts(){
    this._apptService.retrieveAll();
   }

  newAppt(){
    this._router.navigate(['/new_appointment']);
  }

  removeAppt(id){
    this._apptService.removeAppt(id)
  }

}
