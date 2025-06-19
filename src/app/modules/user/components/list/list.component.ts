import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../core/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false
})
export class ListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
    this.users = UserService.getUsers();
  }

  ngOnInit() {

  }
}