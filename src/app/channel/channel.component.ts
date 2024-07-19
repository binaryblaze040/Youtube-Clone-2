import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ChannelComponent implements OnInit {
  
  videos;
  username;
  userEmail;
  views;
  avatar;
  currentVideoDelete : any;
  
  constructor(private svc : DataService, private router : Router) {
    this.videos = this.svc.channelVideos;
    this.username = localStorage.getItem("username");
    this.userEmail = localStorage.getItem("email");
    this.avatar = localStorage.getItem("avatar")

    let viewCount = 0;
    for(let i=0; i<this.videos.length; i++)
      viewCount += this.videos[i].views;

    this.views = viewCount;

    if(this.videos.length > 0)
      this.currentVideoDelete = this.videos[0];
  }

  ngOnInit(): void {
  }

  getVideo(video:any)
  {
    this.svc.showVideo(video);
  }

  editVideo(video : any)
  {
    this.svc.editComponent(video);
  }

  setcurrentVideoDelete(video : any)
  {
    this.currentVideoDelete = video;
  }

  deleteVideo(video : any)
  {
    this.svc.deleteVideo(video);
  }

}
