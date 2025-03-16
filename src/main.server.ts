import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';

const bootstrap = () => bootstrapApplication(AppComponent, {
  ...config,
  providers: [
    provideAnimations(),
    ...config.providers,
    providePrimeNG({
        theme: {
            preset: Aura
        }
    })
  ]
});
export default bootstrap;
