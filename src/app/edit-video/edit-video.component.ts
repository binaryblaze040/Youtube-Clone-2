import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class EditVideoComponent implements OnInit {

  video : any;

  constructor(private svc : DataService, private router : Router) {
    this.video = svc.videoEdit;
  }

  ngOnInit(): void {
  }

  editVideo(formData : any)
  {
    this.svc.editVideo(formData);
  }

}
