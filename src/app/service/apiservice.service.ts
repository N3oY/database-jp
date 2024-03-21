import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  SheeturlNoti = 'https://script.google.com/macros/s/AKfycbwijoFID9V4K3KIchD_R2R6vHc-xYU9bILuYvJoqb2oTXmi3xD5e28joig8d0OpSvQOYg/exec';


  getGoogleSheetValue():Observable<any> {


    return this.http.get(this.SheeturlNoti);
  }

}
