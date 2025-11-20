import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseCrudService<T>{

  private readonly url: string ='';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private readonly http: HttpClient, 
    @Inject('API_URI') private readonly uri: string
  ) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}${this.uri}`, this.httpOptions);
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(`${this.url}${this.uri}/${id}`, this.httpOptions);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}${this.uri}`, item, this.httpOptions);
  }

  update(id: any, item: T): Observable<T> {
    return this.http.put<T>(`${this.url}${this.uri}/${id}`, item, this.httpOptions);
  }

  delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.uri}/${id}`, this.httpOptions);
  }
}
