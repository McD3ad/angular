import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './blog/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
