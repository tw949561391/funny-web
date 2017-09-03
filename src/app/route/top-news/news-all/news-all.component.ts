import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.css']
})
export class NewsAllComponent implements OnInit {
  type: number;

  constructor(private activeRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.type = Number.parseInt(params['type']);
    })
  }

}
