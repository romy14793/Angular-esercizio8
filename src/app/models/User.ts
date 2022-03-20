export enum Role {
  staff,
  student,
  manager,
  admin,
}

export enum Gender {
  male,
  female,
}

interface Address {
  city: string;
  street: string;
  postalCode: string;
}

interface Companies {
  id: number;
  name: string;
  description: string;
  location: Address;
}

export interface User {
  id?: number;
  name?: string;
  surname?: string;
  age?: number;
  dateOfBirth?: string;
  address: Address;
  role?: keyof typeof Role;
  username: string;
  profilePhotoUrl: string;
  companies?: Companies[];
  gender?: keyof typeof Gender;
}
