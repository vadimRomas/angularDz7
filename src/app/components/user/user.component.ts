import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from '../../models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
users: IUsers;
  constructor() { }

  ngOnInit(): void {
  }

}
