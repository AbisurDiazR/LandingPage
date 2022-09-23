import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialNetworksService } from '../services/social-networks.service';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {
  public socialNetworks: any = [];

  constructor(
    private socialNetworkService: SocialNetworksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setSocialNetworks();
  }

  public setSocialNetworks(){
    this.socialNetworkService.getSocialNetwors().pipe().subscribe((res: any) => {
      this.socialNetworks = res.social_networks;
    });
  }

  public goTo(network: any){
    window.open(`http://${network.url}`);
  }

}
