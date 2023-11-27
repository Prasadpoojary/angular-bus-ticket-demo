import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {

  constructor(private _route:ActivatedRoute){}
  from!:string;
  to!:string;
  time!:Date;

  ngOnInit()
  {
      this._route.params.subscribe((data)=>
      {
          this.from=data['from'];
          this.to=data['to'];
          this.time=data['time'];
          // call to fetch bus and show
      });

  }

}
