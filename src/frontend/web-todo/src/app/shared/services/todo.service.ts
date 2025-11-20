import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo.model';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseCrudService<Todo> {

  uriEndPoint = '/todo';

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient,'/todo');
  }

  finalizar(id: number){
    return this.httpClient.post(`/todo/finalizar/${id}`,this.httpOptions)
  }

}
