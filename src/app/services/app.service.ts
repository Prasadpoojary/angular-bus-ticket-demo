import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
