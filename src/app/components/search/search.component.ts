import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor(private _fb:FormBuilder,private _router:Router, private _http:AppService){}

  fromList:string[]=[];
  toList:string[]=[];

  searchForm:FormGroup=this._fb.group({
    from : [null,Validators.required],
    to : [null,Validators.required],
    time:[null,Validators.required]
  });


  ngOnInit()
  {
      this._http.getFromList().subscribe((data)=>
      {
        this.fromList=data;
      },
      (error)=>
      {
        alert("Unable to load Going From options");
      });

      this._http.getToList().subscribe((data)=>
      {
        this.toList=data;
      },
      (error)=>
      {
        alert("Unable to load Going To options");
      });
  }

  search=()=>
  {
    if(this.searchForm.valid)
    {
        this._router.navigate(['bus',this.searchForm.controls['from'].value,this.searchForm.controls['to'].value,this.searchForm.controls['time'].value]);
    }
    else 
    {
      alert("Please fill all the fields");
    }
      
  }

}
