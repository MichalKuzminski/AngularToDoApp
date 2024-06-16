import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  createTask(name: string, done: boolean): Observable<any> {
    const task = { name, done };
    return this.http.post<any>(this.apiUrl, task);
  }
  updateTask(id: Number, done: boolean): Observable<any> {

    return this.http.put<any>(`${this.apiUrl}/${id}`, {done});
  }
  deleteTask(id: Number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
