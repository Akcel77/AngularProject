import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] = [];
  usersSubscription: Subscription = new Subscription();
  usersRecup : any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersSubscription = this.usersService.usersSub.subscribe((usersRecup: User[]) => {
      this.users = usersRecup;
      });
      this.usersService.emitUsers();
  }

  ngOnDestroy() :void {
    this.usersSubscription.unsubscribe();
  }

}
