import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AporteComponent } from './components/aporte/aporte.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ModaledithComponent } from './modaledith/modaledith.component';
import { CertificadoComponent } from './components/certificado/certificado.component';
import { PersonalComponent } from './components/personal/personal.component';
import { HomeComponent } from './components/home/home.component';
import { ImagecertificadoComponent } from './components/imagecertificado/imagecertificado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    NavbarComponent,
    RegisterComponent,
    ResetPasswordComponent,
    AporteComponent,
    PrincipalComponent,
    ModaledithComponent,
    CertificadoComponent,
    PersonalComponent,
    HomeComponent,
    ImagecertificadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
