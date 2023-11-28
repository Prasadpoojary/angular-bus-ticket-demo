import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketDTO } from 'src/app/models/TicketDTO';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit 
{

  constructor(private route:ActivatedRoute, private _http:AppService){}

  ticket!:TicketDTO;

  ngOnInit()
  {
      this.route.params.subscribe((data)=>
      {
        let ticketId=data["ticketId"];

        this._http.getTicketById(ticketId).subscribe((data:TicketDTO)=>
        {
            this.ticket=data;
        },
        (error)=>
        {
          alert("Unable to fetch the ticket");
        })
      })
  }

  
  print()
  {
    window.print();
  }
}
