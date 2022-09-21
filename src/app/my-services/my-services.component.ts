import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../services/my-services.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {
  public services: any = [];

  constructor(
    private myServices: MyServicesService
  ) { }

  ngOnInit(): void {
    this.setMyServices();
  }

  public setMyServices() {
    this.myServices.getMyServices().pipe().subscribe((res: any) => {
      let results = res.services;
      results.forEach((element: any) => {
        this.services.push({
          name: element.name,
          description: element.description,
          icon: element.icon,
          hidden: true
        })
      });
    });
  }

  public showDescription(service: any){
    let index = this.services.findIndex((x: any) => x.name === service.name);
    this.services[index] = {
      name: service.name,
      description: service.description,
      icon: service.icon,
      hidden: false
    };
  }

  public hidenDescription(service: any){
    let index = this.services.findIndex((x: any) => x.name === service.name);
    this.services[index] = {
      name: service.name,
      description: service.description,
      icon: service.icon,
      hidden: true
    };
  }

}
