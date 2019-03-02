import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User, UserVM } from '../models/user.model';
import { UserAdapter } from '../adapters/user.adapter';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(): Observable<UserVM> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/todos/1`)
      .pipe(map((user: User) => new UserAdapter().transform(user)));
  }
}
