import { Component, OnInit } from '@angular/core';
import { DataaccessService } from '../dataaccess.service';
import { BirdAppStats } from '../interface/items';

@Component({
  selector: 'app-dashbboard',
  imports: [],
  templateUrl: './dashbboard.component.html',
  styleUrl: './dashbboard.component.scss'
})
export class DashbboardComponent implements OnInit {
constructor(private dataAccessService : DataaccessService) { }
birAppStats! : BirdAppStats;
ngOnInit(): void {
  this.dataAccessService.getBirdAppStats().subscribe((data: BirdAppStats) => {
    this.birAppStats = data;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
