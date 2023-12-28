import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HomepageModule } from './homepage/homepage.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatLineModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    HomepageModule,
    MatLineModule,
    MatSlideToggleModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
