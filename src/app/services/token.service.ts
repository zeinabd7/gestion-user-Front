import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public staticToken: string = '7WK5T79u5mIzjIXXi2oI9Fglmgivv7RAJ7izyj9tUyQ';

  constructor() { }
  addTokenToUser(user: any): any {
    return { ...user, token: this.staticToken };
  }
}
