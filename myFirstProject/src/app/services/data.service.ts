import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import { TASKS } from '../mock-tasks';
import { Task } from '../Tasks';
@Injectable({
  providedIn: 'root'
})
export class DataService {
private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

constructor (private http:HttpClient){}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
