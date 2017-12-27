import { Component, OnInit } from '@angular/core';
import { Configuration } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  results: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(Configuration.apiUrl + '/posts/?limit=10').subscribe(data => {
      Object.assign(this.results, data);
    })
  }

}
