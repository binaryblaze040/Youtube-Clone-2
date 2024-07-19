import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,
    CommonModule
  ],
  standalone: true
})
export class LoginComponent implements OnInit {
  error : any;

  constructor(private svc : DataService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser(formData : any)
  {
    
    this.svc.login(formData).subscribe( (status:any) => {
      // console.log(status);
      this.router.navigate(['/']);
      this.svc.setActiveUser(status.email, status.name, status.avatar);
    }, (err) => {

      if(err.status == 401)
        this.error = "Wrong Password!";

      else if(err.status == 404)
        this.error = "Email doesn't exists!"

      else
        this.error = "Oops Server Error!"
    });
  }

}
