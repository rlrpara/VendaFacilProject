import { environment } from './../../../environments/environment.prod';
import { RetornoModels } from './../../models/RetornoModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ClientesModel from 'src/app/models/ClientesModels';
import filtroClienteModels from 'src/app/models/filtroClienteModels';

// Http Options
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl = `${environment.urlApi}/clientes`;

  constructor(private http: HttpClient) { }

  obterPorId(id: number): Observable<ClientesModel> {
    return this.http.get<ClientesModel>(`${this.apiUrl}/${id}`);
  }

  obterTodos(filtro: filtroClienteModels): Observable<RetornoModels> {
    return this.http.post<RetornoModels>(`${this.apiUrl}/obtertodos`, filtro);
  }

  inserir(clientes: ClientesModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/inserir`, clientes, httpOptions);
  }

  atualizar(clientes: ClientesModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/inserir`, clientes, httpOptions);
  }

  excluir(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}