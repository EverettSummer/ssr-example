import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.httpClient.get('http://localhost:5000/api/login')
      .pipe(catchError((err: any, caught: Observable<any>) => {
        if(err.status === 400) {
          return fromPromise(this.router.navigate(['']))
        }
        throw err;
      }))
      .subscribe({
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.log(err);
        }
      });
  }

}
