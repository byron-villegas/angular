import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static users: User[] = [];

  constructor() {

  }

  public static getUsers(): User[] {
    return this.users;
  }

  public static addUser(user: User): void {
    this.users.push(user);
  }
}