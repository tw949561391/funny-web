import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {JokerService} from "./joker.service";

@NgModule({
  imports: [HttpModule],
  providers: [JokerService]
})
export class ServiceModule {

}
