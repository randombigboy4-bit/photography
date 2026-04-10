import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, DEFAULT_API_BASE_URL } from '../../environments/environment';

const API_BASE_URL = environment.apiBaseUrl || DEFAULT_API_BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class WebsiteService {
  constructor(private http: HttpClient) {}
  
   createContact(contactData: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/contact/create`, contactData);
  }
   createQuotation(data: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/quotations/create`, data);
  }
}
