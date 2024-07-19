import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true
})
export class SearchComponent implements OnInit {

  videos : any;

  constructor(private svc : DataService) {
    this.videos = svc.searchResults;
    if(this.videos.length==0)
      alert("No videos Found!");
   }

  ngOnInit(): void {
  }

  getVideo(video:any)
  {
    this.svc.showVideo(video);
  }

}
