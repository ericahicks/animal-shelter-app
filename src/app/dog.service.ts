import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Dog } from './models/dogs';
import { DOGS } from './models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private dogsURL = 'http://localhost:8080/spring-mvc/dogs';
  private dogsBreedURL = 'http://localhost:8080/spring-mvc/dogs/breed/';

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsURL);
  }

  getDogsByBreed(breed: String): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsBreedURL + breed);
  }
}
