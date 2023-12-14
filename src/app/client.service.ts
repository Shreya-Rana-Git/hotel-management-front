import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl="http://localhost:9595/hotel-app/clients";
  private idUrl="http://localhost:9595/hotel-app/clients/client-id-gen";

  constructor(private http:HttpClient) { }

  //get client list
  getAllClients():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  // get client by id
  getClientById(id:number):Observable<Client>{
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }

  //get new id
  getNewId():Observable<any>{
    return this.http.get(`${this.idUrl}`);
  }

  //save new record
  saveClient(client:Client):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,client);
  }
  

  //delete client
  deleteClient(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  //update client
  updateClient(id:number,client:Client):Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`,client);
  }
}
