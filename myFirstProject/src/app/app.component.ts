import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = `https://jsonplaceholder.typicode.com/posts`;
  items: any  = [];
  title = 'myFirstProject';
  constructor(private http: HttpClient) {
    
  }
}
