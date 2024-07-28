import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}
  
  onSubmit() {
    let {username, password, firstName, lastName} = this.form;
    console.log(this.form);
    this.http.post("http://localhost:7001/api/Login/register", this.form, {responseType: 'text'}).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
