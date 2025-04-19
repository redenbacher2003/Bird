import { Component, OnInit } from '@angular/core';
import { DataaccessService } from '../dataaccess.service';
import { BirdAppStats, BirdFact, birdWithFact } from '../interface/items';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbboard',
  imports: [CarouselModule, ButtonModule], 
  templateUrl: './dashbboard.component.html',
  styleUrl: './dashbboard.component.scss'
})
export class DashbboardComponent implements OnInit {
responsiveOptions: CarouselResponsiveOptions[]|undefined;

constructor(private dataAccessService : DataaccessService, private router: Router) { }
birAppStats! : BirdAppStats;
featureBirds: BirdFact[] = [];
ngOnInit(): void {
  this.dataAccessService.getBirdAppStats().subscribe((data: BirdAppStats) => {
    this.birAppStats = data;
    this.featureBirds = this.birAppStats.birdsWithFact;});
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }

 onBirdClick(birdId: number) {
  this.router.navigate(['/bird', birdId]); 
 }
}
