import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.scss'],
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true
})
export class ResetEmailComponent implements OnInit {

  constructor(private svc : DataService) { }

  ngOnInit(): void {
  }

  resetPass(formData:any)
  {
    this.svc.resetPassword({
      email : formData.mail
    });
  }

}
