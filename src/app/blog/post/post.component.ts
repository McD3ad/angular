import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../../app.constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Object = {
    title: {
      rendered: ''
    },
    content: {
      rendered: ''
    }
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let slug = this.route.snapshot.paramMap.get('slug');

    this.http.get(Configuration.apiUrl + '/posts?slug=' + slug).subscribe(data => {
      this.post = data[0];
    })
  }

}
