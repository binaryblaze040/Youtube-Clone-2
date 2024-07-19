import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
  ],
  standalone: true
})
export class UploadComponent implements OnInit {
  
  error : any;

  constructor(private svc : DataService) { }

  ngOnInit(): void {
  }

  uploadVideo(formData : any)
  {
    this.svc.upload(formData);
  }

}
