import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Recuperation de l'API dans le fichier environment.ts
  private baseUrl =`${environment.api+'products'+'?API_KEY='+environment.api_key}`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl);
  }

}
