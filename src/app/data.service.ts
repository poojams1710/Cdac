import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    const url = 'http://localhost:8282/get';

    return this.http.get<any>(url)
  }

  postData(eventData: { Number: any; }): Observable<any> {
    
    const url = 'http://localhost:8282/get';
    return this.http.post<any>(url,eventData);
  }

  updateData(eventData: { Number: any; Edit: any}): Observable<any> {
    
    const url = `http://localhost:8282/get/${Number}`;
    return this.http.put<any>(url,eventData);
  }

  deleteData(Num) {
    
    const url = `http://localhost:8282/get/${Num}`;
    return this.http.delete<any>(url,Num);
  }

}
