import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get('http://localhost:5000/api/whoami')
      .subscribe((data) => {
        console.log(data);
      });
  }

}
