import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JokerService} from "../../../service/joker.service";
import {isNullOrUndefined} from "util";


@Component({
  moduleId: module.id,
  selector: 'app-jokes-all',
  templateUrl: './jokes-all.component.html',
  styleUrls: ['./jokes-all.component.css'],
  host: {
    '[style.width]': '"100%"'
  }
})
export class JokesAllComponent implements OnInit {


  private type: number = null;
  private pagework: { pageNum: number, pageSize: number } = {pageNum: 0, pageSize: 10};
  startTime: Date;
  title: string = '全部';

  jokesList: Array<any> = new Array();

  constructor(private activeRoute: ActivatedRoute, private router: Router, private jokeService: JokerService) {
    // if (router.events.subscribe) {
    //   router.events.distinctUntilChanged();
    // }
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.jokesList = [];
      this.pagework = {pageNum: 0, pageSize: 10};
      this.type = Number.parseInt(params['type']);
      this.title = params['title'];
      this.startTime = new Date();
      this.getJokeList();
    })
  }

  getJokeList() {
    this.pagework.pageNum++;
    let filter = {};
    if (this.type != 0) {
      filter = {type: this.type};
    }
    this.jokeService.list(this.pagework, filter, null).subscribe(res => {
      res.forEach(item => {
        this.jokesList.push(item);
      })
    })
  }

  praiseJoke(joke) {
    if (joke.isPraise) {
    } else {
      this.jokeService.praiseJoke(joke._id).subscribe(res => {
        joke.praise = res.praise;
        joke.isPraise = true;
      })
    }
  }

  sharetoqq(joke, url) {
    let baseUrl = `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?` +
      `url=${encodeURIComponent(url)}` +
      `&title=${encodeURIComponent(joke.title)}` +
      `&desc=${encodeURIComponent(joke.title)}` +
      `&summary=&site=` +
      `&pics=${encodeURIComponent(joke.pics[0])}`
    alert(baseUrl);
    window.open(baseUrl);
  }
}
