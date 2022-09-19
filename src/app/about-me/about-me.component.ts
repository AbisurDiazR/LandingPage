import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public aboutMe!: any;
  public loaded: boolean = false;

  constructor(
    private aboutMeService: AboutMeService
  ) { }

  ngOnInit(): void {
    this.getAboutMe();
  }

  public getAboutMe() {
    this.aboutMeService.getAboutMe().subscribe((res: any) => {
      this.aboutMe = res;
      this.loaded = true;
    });
  }

}
