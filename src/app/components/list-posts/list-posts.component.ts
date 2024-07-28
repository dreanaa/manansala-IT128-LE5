import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css',
})
export class ListPostsComponent {
  posts?: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    let headers = new HttpHeaders({
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
    });
    this.http.get<Post[]>('http://localhost:7001/api/Post/posts', {
      headers: headers,
    }).subscribe({
      next: (data: Post[]) => {
        this.posts = data;
      },
    });
  }
}
