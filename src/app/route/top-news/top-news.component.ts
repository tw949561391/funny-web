import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JokerService} from "../../service/joker.service";

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {

  types = [];
  select: string;

  constructor(private router: Router, private jokeService: JokerService) {
  }

  ngOnInit() {
    this.jokeService.getAllTypes().subscribe((res) => {
      this.types = res;

    });
  }


  typeChange($event) {
    this.router.navigate(['/top-news/list', $event]);
  }
}
