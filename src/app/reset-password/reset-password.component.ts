import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
  ],
  standalone: true
})
export class ResetPasswordComponent implements OnInit {

  email : any;
  otp : any;

  constructor(private svc : DataService, private activatedRoute: ActivatedRoute, private router : Router, private http : HttpClient) { 

    this.activatedRoute.params.subscribe(params => {
      this.email = params['email'];
      this.otp = params['otp'];

      let resetOTP;
      http.get("https://binaryblaze-youtube-clone.herokuapp.com/otp").subscribe((otp:any) => {
        resetOTP = otp.otp
        if(this.otp != resetOTP)
        {
          alert("Password reset url is not valid");
          this.router.navigate(['/login']);
        }
      });

    });
  }

  ngOnInit(): void {
  }

  resetPassword(data : any)
  {
    this.svc.resetPasswordRequest({
      email : this.email,
      password : data.password
    });
  }

}
