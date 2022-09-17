import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { SubSink } from 'subsink';
import { DEFAULT_LANGUAGE, NAVBAR_ITEMS } from './shared/utils';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  public navItems = NAVBAR_ITEMS;
  public show: boolean = false;

  constructor(
    private translateService: TranslateService,
    private iconService: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE),
      this.translateService.use(DEFAULT_LANGUAGE);
    this.iconService.addSvgIcon(
      'ic-menu',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg')
    );
  }

  ngOnInit(): void {
    this.setSkills();
  }

  public setSkills() {
    const options = {
      strings: ['Innovation.', 'Discovery.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      cursorChar: '|',
      loop: true,
    };

    const typed = new Typed('.home-skill', options);
  }

  public mostrar() {
    this.show = true;
  }

  public ocultar() {
    this.show = false;
  }
}
