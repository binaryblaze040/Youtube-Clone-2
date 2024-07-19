import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetEmailComponent } from './reset-email/reset-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';
import { VideoComponent } from './video/video.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'editVideo', component: EditVideoComponent },
  { path: 'search', component: SearchComponent },
  { path: 'resetEmail', component: ResetEmailComponent },
  { path: 'resetPassword/:email/:otp', component: ResetPasswordComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
