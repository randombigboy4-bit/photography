import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, DEFAULT_API_BASE_URL } from '../../environments/environment';

const API_BASE_URL = environment.apiBaseUrl || DEFAULT_API_BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class ApiServices {
  constructor(private http: HttpClient) {}

  LoginUser(data: any) {
    return this.http.post(`${API_BASE_URL}/admin/login`, data);
  }
  getAllTraditional() {
    return this.http.get<any>(`${API_BASE_URL}/traditionalWedding/get`);
  }

  getAllCandid() {
    return this.http.get<any>(`${API_BASE_URL}/candidWedding/get`);
  }
  getAllBirthday() {
    return this.http.get<any>(`${API_BASE_URL}/birthday/get`);
  }
  getAllBusinessMeetup() {
    return this.http.get<any>(`${API_BASE_URL}/businessMeetup/get`);
  }
  getAllCinematic() {
    return this.http.get<any>(`${API_BASE_URL}/cinematicWedding/get`);
  }
  getAllNewborn() {
    return this.http.get<any>(`${API_BASE_URL}/newbornShoot/get`);
  }
  getAllProducts() {
    return this.http.get<any>(`${API_BASE_URL}/productLaunches/get`);
  }
  getAllRegular() {
    return this.http.get<any>(`${API_BASE_URL}/regularPrewedding/get`);
  }
  uploadTraditional(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/traditionalWedding/upload`, data);
  }
  getEventTypes() {
    return this.http.get<any>(`${API_BASE_URL}/eventType/get`);
  }
  uploadRegular(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/regularPrewedding/upload`, data);
  }
  uploadProduct(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/productLaunches/upload`, data);
  }
  uploadNewBorn(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/newbornShoot/upload`, data);
  }
  uploadCinematic(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/cinematicWedding/upload`, data);
  }
  uploadCandid(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/candidWedding/upload`, data);
  }
  uploadBusiness(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/businessMeetup/upload`, data);
  }
  uploadBirthday(data: FormData): Observable<any> {
    return this.http.post(`${API_BASE_URL}/birthday/upload`, data);
  }

  updateBirthday(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}//birthday/update${eventId}`, formData);
  }

  deleteBirthday(eventId: string, body: any) {
    return this.http.request('delete', `${API_BASE_URL}//birthday/delete${eventId}`, {
      body,
    });
  }
  updateTraditional(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}/traditionalWedding/update/${eventId}`, formData);
  }

  deleteTraditional(eventId: string, body: any) {
    return this.http.request(
      'delete',
      `${API_BASE_URL}/traditionalWedding/delete/${eventId}`,
      {
        body,
      },
    );
  }
  updateBusiness(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}/businessMeetup/update/${eventId}`, formData);
  }

  deleteBusiness(eventId: string, body: any) {
    return this.http.request('delete', `${API_BASE_URL}/businessMeetup/delete/${eventId}`, {
      body,
    });
  }
  updateCandid(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}/candidWedding/update/${eventId}`, formData);
  }

  deleteCandid(eventId: string, body: any) {
    return this.http.request('delete', `${API_BASE_URL}/candidWedding/delete/${eventId}`, {
      body,
    });
  }
  updateCinematic(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}/cinematicWedding/update/${eventId}`, formData);
  }

  deleteCinematic(eventId: string, body: any) {
    return this.http.request('delete', `${API_BASE_URL}/cinematicWedding/delete/${eventId}`, {
      body,
    });
  }
  updateNewborn(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}/newbornShoot/update/${eventId}`, formData);
  }

  deleteNewborn(eventId: string, body: any) {
    return this.http.request('delete', `${API_BASE_URL}/newbornShoot/delete/${eventId}`, {
      body,
    });
  }
  updateProduct(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}/productLaunches/update/${eventId}`, formData);
  }

  deleteProduct(eventId: string, body: any) {
    return this.http.request('delete', `${API_BASE_URL}/productLaunches/delete/${eventId}`, {
      body,
    });
  }
  createPackage(data: any) {
    return this.http.post(`${API_BASE_URL}/packages/add`, data);
  }

  updateRegular(eventId: string, formData: FormData) {
    return this.http.put(`${API_BASE_URL}/regularPrewedding/update/${eventId}`, formData);
  }

  deleteRegular(eventId: string, body: any) {
    return this.http.request(
      'delete',
      `${API_BASE_URL}/regularPrewedding/delete/${eventId}`,
      {
        body,
      },
    );
  }
  getPackagesByEventName(eventName: string) {
    return this.http.get<any>(
      `${API_BASE_URL}/packages/event/${encodeURIComponent(eventName)}`,
    );
  }
  packageDelete(id: string) {
    return this.http.delete(`${API_BASE_URL}/packages/delete/${id}`);
  }
  packageUpdate(id: string, data: any) {
    return this.http.put(`${API_BASE_URL}/packages/update/${id}`, data);
}
}
