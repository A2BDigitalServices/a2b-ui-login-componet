import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { TodoComponent } from './todo/todo.component';
import { SignupComponent } from './signup/signup.component';
import { CreatecaseComponent } from './createcase/createcase.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { SendEmailThirdPartyComponent } from './send-email-third-party/send-email-third-party.component';
import { ViewCaseComponent } from './view-case/view-case.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StatusComponent } from './status/status.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TodosComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    TodoComponent,
    SignupComponent,
    CreatecaseComponent,
    UploadfilesComponent,
    SendEmailThirdPartyComponent,
    ViewCaseComponent,
    SideNavComponent,
    StatusComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
