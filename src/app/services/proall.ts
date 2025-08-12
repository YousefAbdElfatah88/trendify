import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iproduct } from '../../app/iproduct';

@Injectable({
  providedIn: 'root'
})
export class Proall {
  private readonly httpClient = inject(HttpClient);

  getAllProducts(): Observable<iproduct[]> {
    return this.httpClient.get<iproduct[]>('https://fakestoreapi.com/products');
  }
}