import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

const newLocal = 'http://localhost:8080/api/books';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) {}

  findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${newLocal}`);
  }

  findById(id: number): Observable<Book>{
    return this.http.get<Book>(`${newLocal}/${id}`);
  }

  create(book: Book): Observable<Book>{
    return this.http.post<Book>(newLocal, book);
  }

  update(book: Book): Observable<Book>{
    return this.http.put<Book>(`${newLocal}/${book.id}`, book);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${newLocal}/${id}`);
  }

  deleteAll(): Observable<void>{
    return this.http.delete<void>(newLocal);
  }
}
