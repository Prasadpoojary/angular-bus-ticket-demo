import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDTO } from 'src/app/models/BusDTO';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent  implements OnInit {


  constructor(private _route:ActivatedRoute,private _service:AppService,private _router:Router, private _fb:FormBuilder){}

  total:Number=0;
  selectedSeat:string[]=[]
  bus!:BusDTO;
  showUserForm:boolean=false;
  date!:Date;
  from!:string;
  to!:string;

  userForm:FormGroup=this._fb.group({
    'username':[null,Validators.required],
    'mobile':[null,Validators.required],
    'email':[null,Validators.required],
  });

  ngOnInit()
  {
    this._route.params.subscribe((data)=>
    {
      let id:Number=data['busId'];
      this.date=data["time"];
      this.from=data['from'];
      this.to=data['to'];
      this._service.getBusById(id).subscribe((busdata:BusDTO)=>
      {
        this.bus=busdata;
      });
    });
  }

  select=(seat:string)=>
  {
      if(this.selectedSeat.filter(s=>s==seat).length == 0)
      {
          this.selectedSeat.push(seat)
      }
      else 
      {
        this.selectedSeat.splice(this.selectedSeat.indexOf(seat),1);
      }
      this.total=this.selectedSeat.length*this.bus.fare;
  }


  contains=(seat:string):boolean=>
  {
     return this.selectedSeat.filter(s=>s==seat).length != 0 ;  
  }

  confirmSeat=()=>
  {
      this.showUserForm=!this.showUserForm;
  }

  confirmTicket=()=>
  {
   
      if(this.userForm.valid)
      {
          var data={ "id":this.generateId(),"busname":this.bus.name,"buscoach":this.bus.coach,"bustime":this.bus.time,"date":this.date,"seat":this.selectedSeat,
        "username":this.userForm.controls['username'].value,
        "mobile":this.userForm.controls['mobile'].value,
        "email":this.userForm.controls['email'].value,
        "total":this.total,
        "from":this.from,
        "to":this.to
      };

          this._service.createTicket(data).subscribe((data)=>
          {
            alert("Ticket booked");
            this._router.navigate(["/preview",data.id])
          },
          (error)=>
          {
            alert("Something went wrong");
          });
      }
      else 
      {
        alert("Please fill valid input");
      }
  }


  generateId() {
    let size=20;
    let values="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let text = "";
    for (let i = 0; i < size; i++) {
      text += values.charAt(Math.floor(Math.random() * values.length));
    }
      return text;
  }
 


}
