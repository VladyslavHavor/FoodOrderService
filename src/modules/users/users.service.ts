import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Ivan', role: 'client' },
    { id: 2, name: 'Admin', role: 'admin' },
  ];

  getAllUsers() {
    return this.users;
  }
}
