import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  private url = URL_API;

  constructor(
    private http: HttpClient
  ) { }

  public sendEmail(data: any){
    return this.http.post(this.url,data);
  }


}
