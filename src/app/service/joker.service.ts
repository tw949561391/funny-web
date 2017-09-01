import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class JokerService {
  constructor(private http: Http) {
  }

  list(pagework: { pageNum: number, pageSize: number }, filter: any, sort: any) {
    let params = {
      pagework: pagework,
      filter: filter,
      sort: sort || {'create_time': -1}
    };
    return this.http.post("http://localhost:3000/jokes/list", params).map(res => res.json());
  }

  getAllTypes() {
    return this.http.post("http://localhost:3000/jokes/type/list", {}).map(res => res.json());
  }

  praiseJoke(_id: string) {
    return this.http.post("http://localhost:3000/jokes/praise/" + _id, {}).map(res => res.json());
  }
}
