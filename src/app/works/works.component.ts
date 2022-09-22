import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public works!: any;

  constructor(
    private worksService: WorksService
  ) { }

  ngOnInit(): void {
    this.getWorks();
  }

  public getWorks(){
    return this.worksService.getMyWorks().pipe().subscribe((res: any) => {
      this.works = res.works;
    });
  }

}
