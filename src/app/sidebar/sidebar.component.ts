import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true
})
export class SidebarComponent implements OnInit {
  isVisible = false;
  userName : any;
  constructor(private svc : DataService, private router : Router) {
  }

  ngOnInit(): void {
  }

  toogleBar()
  {
    this.isVisible = !this.isVisible;

    if(localStorage.getItem("username") == null)
      this.userName = "";
    else
      this.userName = localStorage.getItem("username");
  }

  logout()
  {
    this.svc.logout();
    this.toogleBar();
  }

  getChannel()
  {
    this.svc.channel();
    this.toogleBar();
  }

}
