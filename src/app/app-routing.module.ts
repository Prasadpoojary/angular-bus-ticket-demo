import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BuslistComponent } from './components/buslist/buslist.component';
import { SeatComponent } from './components/seat/seat.component';
import { PreviewComponent } from './components/preview/preview.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: 'bus/:from/:to/:time',
    component: BuslistComponent,
  },
  {
    path: 'seat/:busId',
    component: SeatComponent,
  },
  {
    path: 'user/:ticketId',
    component: UserComponent,
  },
  {
    path: 'preview/:ticketId',
    component: PreviewComponent,
  },
  {
    path: 'ticket/:ticketId',
    component: TicketComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
