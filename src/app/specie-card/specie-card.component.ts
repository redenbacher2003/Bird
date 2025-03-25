import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { specieItem } from '../interface/items';
@Component({
  selector: 'app-specie-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './specie-card.component.html',
  styleUrl: './specie-card.component.scss'
})
export class SpecieCardComponent {
  @Input() specie!: specieItem;
}
