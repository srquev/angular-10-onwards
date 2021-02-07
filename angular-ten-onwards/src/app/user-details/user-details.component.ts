import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userDetails: any;
  public isDataAvailable: boolean | undefined;
  public userProfileData: any;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.getUserData();
    this.getUserProfileData();
  }


  getUserData():void{
    this.isDataAvailable = false;
    this.userDataService.getUserData().subscribe((data)=> {
      this.isDataAvailable = true;
      this.userDetails = data;
      this.userDetails = this.userDetails.slice(0,10);
    })
  }

  getUserProfileData(){
    this.userDataService.getUserProfileData().subscribe((userData)=> {
      console.log(userData);
      this.userProfileData = userData;
      this.userProfileData = this.userProfileData.slice(0,10);
    })
  }

}
