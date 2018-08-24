import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile ;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getProfile().subscribe(
      (data) => {
        console.log('data of user', data);
        this.profile = data;
      }
    );
  }

}
