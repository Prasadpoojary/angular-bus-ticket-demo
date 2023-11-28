import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusDTO } from '../models/BusDTO';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http:HttpClient) { }
  url:string="http://localhost:3000/"

  getFromList=():Observable<any>=>
  {
    return this._http.get(this.url+"from")
  }

  getToList=():Observable<any>=>
  {
    return this._http.get(this.url+"to")
  }

  getAllBus=():Observable<any>=>
  {
    return this._http.get(this.url+"bus")
  }

  getBusById=(id:Number):Observable<any>=>
  {
    return this._http.get(this.url+"bus/"+id)
  }

  createTicket=(data:any):Observable<any>=>
  {
    return this._http.post(this.url+"ticket",data,{headers:new HttpHeaders()
      .set('Content-Type','application/json')});
  }

  getTicketById=(id:string):Observable<any>=>
  {
    return this._http.get(this.url+"ticket/"+id)
  }


}
