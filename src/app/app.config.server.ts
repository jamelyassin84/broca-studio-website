import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'
import { provideServerRendering } from '@angular/platform-server'
import { appConfig } from './app.config'

/**
 * The  server configuration of the application.
 * @type {ApplicationConfig}
 */
const serverConfig: ApplicationConfig = {
	providers: [provideServerRendering()],
}

/**
 * The merged application configuration.
 * @type {ApplicationConfig}
 */
export const config: ApplicationConfig = mergeApplicationConfig(
	appConfig,
	serverConfig,
)
	