import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true
})
export class TopbarComponent implements OnInit {
  constructor(public topbarsvc : DataService, private router : Router) {
  }

  ngOnInit(): void {

  }
  
  searchVideo(formData : any)
  {
    this.topbarsvc.search(formData.searchQuery);
  }

  logout()
  {
    this.topbarsvc.logout();
  }

  getChannel()
  {
    this.topbarsvc.channel();
  }

}
