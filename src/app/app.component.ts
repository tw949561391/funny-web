import {Component} from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private iconRepository: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRepository
      .addSvgIcon('scroll-top', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/scroll_top.svg'))
      .addSvgIcon('like', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/like.svg'))
      .addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/more.svg'))
      .addSvgIcon('share', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/share.svg'))
      .addSvgIcon('more-v', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/more-v.svg'));
  }
}
