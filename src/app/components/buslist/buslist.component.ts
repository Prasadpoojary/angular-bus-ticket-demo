import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusDTO } from 'src/app/models/BusDTO';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _service:AppService){}
  from!:string;
  to!:string;
  time!:Date;
  busList:BusDTO[]=[];

  ngOnInit()
  {
      
      this._route.params.subscribe((data)=>
      {
          this.from=data['from'];
          this.to=data['to'];
          this.time=data['time'];
          // call to fetch bus and show
          this._service.getAllBus().subscribe(
            (data:BusDTO[])=>
            {
                this.busList=data.filter(bus=> bus.from==this.from && bus.to==this.to);
            },
            (error)=>
            {
              alert("Unable to fetch Bus");
            }
          );


      });

  }

}
