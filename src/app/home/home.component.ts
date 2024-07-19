import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  videos : any;
  constructor(private svc : DataService) {
    this.svc.getVideos().subscribe( (allVideos:any) => {
      this.videos = allVideos;
    });
  }

  ngOnInit(): void {
  }

  getVideo(video:any)
  {
    this.svc.showVideo(video);
  }

}
