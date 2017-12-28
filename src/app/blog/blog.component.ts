import { Component, OnInit } from '@angular/core';
import { Configuration } from '../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  results: string[] = [];
  itemsCount: number;
  loading: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.itemsCount = this.results.length;

    this.loading = true;

    this.http.get(Configuration.apiUrl + '/posts/?per_page=12&offset=' + this.itemsCount).subscribe(data => {
      let res: any = data;

      this.results.push(...res);

      this.itemsCount = this.results.length;

      this.loading = false;
    })
  }

}
