import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset'; // Import FieldsetModule if used in the template
import { AvatarModule } from 'primeng/avatar'; // Import AvatarModule for avatar functionality

@Component({
  selector: 'app-bird-compoment',
  imports: [FieldsetModule, AvatarModule], // Import any necessary modules here, e.g., FieldsetModule from primeng/fieldset if used in the template
  templateUrl: './bird-compoment.component.html',
  styleUrl: './bird-compoment.component.scss'
})
export class BirdCompomentComponent {

}
