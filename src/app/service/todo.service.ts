import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../common/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  postTodo(request: Todo) {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.httpClient.post(url, request, {headers});
  }

}
