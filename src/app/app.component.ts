import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { UserVM } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user$: Observable<UserVM>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }
}
