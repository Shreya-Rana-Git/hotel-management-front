import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientServices } from './client-services';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  private baseUrl="http://localhost:9595/hotel-app/client-services";
  private idUrl="http://localhost:9595/hotel-app/client-services/id-gen";
  private delUrl="http://localhost:9595/hotel-app/client-service";
  constructor(private http:HttpClient) { }

  getClientServicesByClientId(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  generateId():Observable<any>{
    return this.http.get(`${this.idUrl}`);
  }

  saveNewClientService(id:number,service:ClientServices):Observable<Object>{
    return this.http.post(`${this.baseUrl}/${id}`,service);
  }

  deleteAll(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteSingle(id:number):Observable<any>{
    return this.http.delete(`${this.delUrl}/${id}`);
  }
}
