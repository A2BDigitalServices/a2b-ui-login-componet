import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RoutegaudeService } from './services/routegaude.service';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { CreatecaseComponent } from './createcase/createcase.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { SendEmailThirdPartyComponent } from './send-email-third-party/send-email-third-party.component';
import { ViewCaseComponent } from './view-case/view-case.component';
import { StatusComponent } from './status/status.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home/:name' ,component:HomeComponent,canActivate:[RoutegaudeService]},
  {path:'home' ,component:HomeComponent,canActivate:[RoutegaudeService]},
  {path: 'status/:name',component:StatusComponent,canActivate:[RoutegaudeService]},
  {path: 'status',component:StatusComponent,canActivate:[RoutegaudeService]},
  {path: 'partners',component:PartnersComponent,canActivate:[RoutegaudeService]},
  {path:'todos',component:TodosComponent,canActivate:[RoutegaudeService]},
  {path:'todo/:id',component:TodoComponent,canActivate:[RoutegaudeService]},
  {path:'view/:id',component:ViewCaseComponent,canActivate:[RoutegaudeService]},
  {path: 'case',component:CreatecaseComponent,canActivate:[RoutegaudeService]},
  {path: 'upload/:id',component:UploadfilesComponent,canActivate:[RoutegaudeService]},
  {path: 'sendMail/:id',component:SendEmailThirdPartyComponent,canActivate:[RoutegaudeService]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'logout',component:LogoutComponent,canActivate:[RoutegaudeService]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
