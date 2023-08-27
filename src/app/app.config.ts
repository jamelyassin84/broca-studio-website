import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideRouterStore } from '@ngrx/router-store'
import { provideEffects } from '@ngrx/effects'

/**
 * Provides the application configuration for routing.
 * Prevents destructive hydration
 *
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		// provideClientHydration(),
		provideAnimations(),
		provideStore(),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		provideRouterStore(),
		provideEffects(),
	],
}
