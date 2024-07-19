import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataService } from './data.service'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChannelComponent } from './channel/channel.component';
import { UploadComponent } from './upload/upload.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { SearchComponent } from './search/search.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetEmailComponent } from './reset-email/reset-email.component';
import { LoadingComponent } from './loading/loading.component';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    TopbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VideoComponent,
    SidebarComponent,
    ChannelComponent,
    UploadComponent,
    EditVideoComponent,
    SearchComponent,
    ResetPasswordComponent,
    ResetEmailComponent,
    LoadingComponent
  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Youtube-Clone-2';
}
