import {
	ApplicationConfig,
	importProvidersFrom,
	isDevMode,
} from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideRouterStore } from '@ngrx/router-store'
import { provideEffects } from '@ngrx/effects'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

/**
 * Provides the application configuration for routing.
 * Prevents destructive hydration
 *
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
	providers: [
		provideStore(),
		provideEffects(),
		provideAnimations(),
		provideRouterStore(),
		provideRouter(routes),
		// provideClientHydration(),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		importProvidersFrom(
			HttpClientModule,
			TranslateModule.forRoot({
				loader: {
					deps: [HttpClient],
					provide: TranslateLoader,
					useFactory: HttpLoaderFactory,
				},
			}),
		),
	],
}

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
