import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset'; // Import FieldsetModule if used in the template
import { AvatarModule } from 'primeng/avatar'; // Import AvatarModule for avatar functionality
import { AccordionModule } from 'primeng/accordion'; // Import AccordionModule if used in the template
import { bird, birdWithFact } from '../interface/items';
import { Input } from '@angular/core';
import { DataaccessService } from '../dataaccess.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bird-compoment',
  imports: [FieldsetModule, AvatarModule, AccordionModule, FieldsetModule], // Import any necessary modules here, e.g., FieldsetModule from primeng/fieldset if used in the template
  templateUrl: './bird-compoment.component.html',
  styleUrl: './bird-compoment.component.scss'
})

export class BirdCompomentComponent implements OnInit {
  birdId!: number;  
  constructor(private dataAccessService: DataaccessService, private route: ActivatedRoute) { }
  birdWithFact! : birdWithFact; 
  
  ngOnInit(): void {    
    const idParam = this.route.snapshot.paramMap.get('id');
    this.birdId = idParam ? parseInt(idParam, 10) : 0; 
    this.dataAccessService.getBirdWithFactById(this.birdId).subscribe((data: birdWithFact) => {
      if (data) { this.birdWithFact = data;}
     } 
    )
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
      

