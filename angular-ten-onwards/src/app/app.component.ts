import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public color:string | undefined;
  title = 'angular-ten-onwards';
constructor(private userDataService : UserDataService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const subcpn = this.userDataService.getUserData().subscribe((data)=> {console.log(data)})
  }
}
