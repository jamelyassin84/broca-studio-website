/**
 * Bootstrap the Angular application with the specified component and configuration.
 *
 * @param {Type} rootComponent - The root component of the application.
 * @param {ApplicationConfig} appConfig - The configuration for the application.
 * @returns {Promise<void>} A promise that resolves when the application is bootstrapped successfully.
 */
import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'

bootstrapApplication(AppComponent, appConfig)
	.then(() => console.log('Application is running '))
	.catch((err) => console.error(err))
