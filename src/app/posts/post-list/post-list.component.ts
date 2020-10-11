import { Component } from '@angular/core';

@Component({
  selector:'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: "FirstPost", content: "My first Post"},
    {title: "SecondPost", content: "My second Post"},
    {title: "ThirdPost", content: "My third Post"}
  ]
}
