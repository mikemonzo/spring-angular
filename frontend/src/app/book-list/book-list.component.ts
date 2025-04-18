import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookServiceService } from '../services/book-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books?:Book[];

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  private fetchBooks() {
    this.bookService.findAll().subscribe({
      next: value =>{
        this.books = value;
        console.log(this.books);
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
