import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8082/clientes';
  constructor(private http: HttpClient) { }
  getClientes() {
    return this.http.get(this.baseUrl);
  }
}
