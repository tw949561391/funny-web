import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JokerService} from "../../service/joker.service";

@Component({
  selector: 'app-joke',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  host: {
    '[style.width]': '"100%"'
  }
})
export class JokesComponent implements OnInit {

  types = [];
  select: string;

  constructor(private router: Router, private jokeService: JokerService) {
  }

  ngOnInit() {
    this.jokeService.getAllTypes().subscribe((res) => {
      this.types = res;
    });
  }

}
