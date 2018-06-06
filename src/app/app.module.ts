import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailspageService} from './geet/detailspage.service'


import { AppComponent } from './app.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailspageComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DetailspageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
