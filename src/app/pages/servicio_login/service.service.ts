import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AmazonService{

  private baseUrl = 'https://frontend-persona.onrender.com/Amazon/trabaja-con-nosotros';

  constructor(private http: HttpClient) {}

  // Obtener todos los datos
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Obtener datos por ID
  getById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}`, data, { headers });
  }

  // Editar un registro por ID
  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // Eliminar un registro por ID
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
