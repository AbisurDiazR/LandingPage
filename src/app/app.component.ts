import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, NAVBAR_ITEMS, PROJECTS, SKILLS, WHATSAPP_URL } from './shared/utils';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Abisur Díaz | Desarrollador Full Stack';
  navItems = NAVBAR_ITEMS;
  show = false;
  skills = SKILLS;
  projects = PROJECTS;
  whatsappUrl = WHATSAPP_URL;

  constructor(
    private translateService: TranslateService,
    private iconService: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);
    this.translateService.use(DEFAULT_LANGUAGE);
    this.iconService.addSvgIcon(
      'ic-menu',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg')
    );
  }

  ngOnInit(): void {
    this.initTyped();
  }

  private initTyped(): void {
    const options = {
      strings: [
        'Desarrollador Full Stack.',
        'Angular & React.',
        'Node.js & Java.',
        'Apps web y móviles.',
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };
    new Typed('.home-skill', options);
  }

  toggleNav(): void {
    this.show = !this.show;
  }

  cerrarNav(): void {
    this.show = false;
  }

  openWhatsApp(): void {
    window.open(this.whatsappUrl, '_blank', 'noopener');
  }

  getSectionId(navKey: string): string {
    return navKey.split('.')[1] || 'nav-home';
  }
}
