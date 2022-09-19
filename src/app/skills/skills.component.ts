import { SkillsService } from './../services/skills.service';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(
    private skillService: SkillsService
  ) { }

  ngOnInit(): void {
    this.setSkills();
  }

  public setSkills() {
    this.skillService.getSkills().pipe().subscribe((res: any) => {
      const auxArray: any = [];
      res.skills.forEach((element: any) => {
        auxArray.push(element.name);
      });
      const options = {
        strings: auxArray,
        typeSpeed: 100,
        backSpeed: 100,
        showCursor: false,
        cursorChar: '|',
        loop: true,
      };
      const typed = new Typed('.home-skill', options);
    },(err: any) => {
    });
  }

}
