import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'ex3-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  detailsIndex!: number;
  @Output() sendIndexDetails = new EventEmitter<User>();
  person: Array<any> = [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100',
      },
      role: 'staff',
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://bit.ly/3yRngEP',
      gender: 'male',
    },
    {
      id: 12312,
      name: 'Maria',
      surname: 'Rossa',
      age: 26,
      dateOfBirth: '1994-10-11',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 10',
        postalCode: '90100',
      },
      role: 'manager',
      username: 'MariaRossa94',
      profilePhotoUrl: 'https://bit.ly/3DWWxuj',
      gender: 'female',
    },
    {
      id: 45645,
      name: 'Elis',
      surname: 'Miao',
      age: 5,
      dateOfBirth: '2016-05-08',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 120',
        postalCode: '90100',
      },
      role: 'admin',
      username: 'ElisMiao',
      profilePhotoUrl: 'https://bit.ly/3zU6iH3',
      gender: 'female',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  deleteUser(index: any) {
    this.person.splice(index, 1);
  }
  userDetails(index: number) {
    this.detailsIndex = index;
    this.sendIndexDetails.emit(this.person[this.detailsIndex]);
  }
}
