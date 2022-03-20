import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/User';
@Component({
  selector: 'ex3-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
})
export class UserContainerComponent implements OnInit {
  singleUser!: User | null;
  constructor() {}

  ngOnInit(): void {}
  receiveSingleUser(data: User) {
    this.singleUser = data;
  }
  nullUser(data: null) {
    this.singleUser = data;
  }
}
