import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, Gender, Role } from 'src/app/models/User';
import { NullLiteral } from 'typescript';

@Component({
  selector: 'ex3-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  properties: any = [];
  @Input() singleUser!: User | null;
  @Output() nullUser = new EventEmitter();
  componentOpened = true;
  companies = [
    {
      id: 148979,
      name: 'Develhope',
      description: 'La migliore',
      location: {
        city: 'Palermo',
        street: 'Via Libertà 58',
        postalCode: '90139',
      },
    },
    {
      id: 123123,
      name: 'Apple',
      description: 'E insomma...',
      location: {
        city: 'Cupertino',
        street: 'One Apple Park Way',
        postalCode: '95014',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  closeComponent() {
    this.singleUser = null;
    this.nullUser.emit(this.singleUser);
  }
}
