import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/shared/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navList = [
    'Home',
    'TV Shows',
    'News & Popular',
    'My List',
    'Browse by Language',
  ];
  userName = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  usersImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  @Input() userImg: string = '';

  constructor(private loginService:LoginServiceService){}

  ngOnInit(): void {}

  signOut() {
    this.loginService.signOut()
  }
}
