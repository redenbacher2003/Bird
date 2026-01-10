import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import Lara from '@primeng/themes/aura';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
              provideZoneChangeDetection({ eventCoalescing: true }),
              provideHttpClient(withInterceptorsFromDi(), withFetch()),
              provideRouter(routes), 
              provideClientHydration(withEventReplay()),
              provideAnimationsAsync(),
              providePrimeNG({ theme: { preset: Lara } }),
              provideAnimations(),
              { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
};
