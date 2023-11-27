import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BuslistComponent } from './components/buslist/buslist.component';
import { SeatComponent } from './components/seat/seat.component';
import { UserComponent } from './components/user/user.component';
import { PreviewComponent } from './components/preview/preview.component';
import { TicketComponent } from './components/ticket/ticket.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BuslistComponent,
    SeatComponent,
    UserComponent,
    PreviewComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
