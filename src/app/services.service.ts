import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from './services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl="http://localhost:9595/hotel-app/services";
  private idUrl="http://localhost:9595/hotel-app/services/id-gen";
  private urlForSingleRecord ="http://localhost:9595/hotel-app/serviceById";
  constructor(private http:HttpClient) { }

  //getNewId
  getNewId():Observable<any>{
    return this.http.get(`${this.idUrl}`);
  }
  //get the list
  getServicesList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  //get service by name
  getServiceByName(name:String):Observable<Services>{
    return this.http.get<Services>(`${this.baseUrl}/${name}`);
  }
  //delete service
  deleteService(id:number):Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //save new service
  saveNewService(service:Services):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,service);
  }

  //update service
  updateService(id:number,service:Services):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,service);
  }

  //get service by id
  getServiceById(id:number):Observable<any>{
    return this.http.get(`${this.urlForSingleRecord}/${id}`);
  }
}
