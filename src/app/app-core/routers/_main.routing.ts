import { Route } from '@angular/router'

export const MAIN_ROUTING: Route[] = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},

	{
		path: 'home',
		loadComponent: () =>
			import('app/modules/guest/home/home.component').then(
				(component) => component.HomeComponent,
			),
	},

	{
		path: 'about-us',
		loadComponent: () =>
			import('app/modules/guest/about-us/about-us.component').then(
				(component) => component.AboutUsComponent,
			),
	},

	{
		path: 'our-work',
		loadComponent: () =>
			import('app/modules/guest/our-work/our-work.component').then(
				(component) => component.OurWorkComponent,
			),
	},

	{
		path: 'our-services',
		loadComponent: () =>
			import(
				'app/modules/guest/our-services/our-services.component'
			).then((component) => component.OurServicesComponent),
	},

	{
		path: 'our-clients',
		loadComponent: () =>
			import('app/modules/guest/our-clients/our-clients.component').then(
				(component) => component.OurClientsComponent,
			),
	},
]
