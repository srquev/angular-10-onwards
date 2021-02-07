import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userDetails: any;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.getUserData()
  }


  getUserData():void{
    this.userDataService.getUserData().subscribe((data)=> {
      this.userDetails = data;
      this.userDetails = this.userDetails.slice(0,10)
    })
  }

}
