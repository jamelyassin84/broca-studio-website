import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { SharedModule } from 'app/shared/shared.module'

@Component({
	selector: 'splash',
	standalone: true,
	imports: [SharedModule],
	animations: [
		...dbwAnimations,
		...[
			trigger('changeColorAnimation', [
				state(
					'initial',
					style({ color: 'white', 'text-shadow': 'none' }),
				),
				state(
					'changed',
					style({
						color: 'yellow',
						'text-shadow': '0 0 50px rgba(255, 255, 255, 0.5)',
					}),
				),
				transition('initial => changed', animate('1000ms')),
			]),
			trigger('fadeInTextAnimation', [
				state(
					'initial',
					style({ color: 'white', 'text-shadow': 'none' }),
				),
				state(
					'visible',
					style({
						color: '#FE3F7F',
						'text-shadow': '0 0 50px rgba(94, 71, 150, 0.5)',
					}),
				),
				transition('hidden => visible', animate('2000ms')),
			]),
		],
	],
	templateUrl: './splash.component.html',
})
export class SplashComponent {
	changeColorState = 'initial'
	fadeInTextState = 'initial'

	constructor() {
		setTimeout(() => {
			this.changeColorState = 'changed'
		}, 2000)

		setTimeout(() => {
			this.fadeInTextState = 'visible'
		}, 3500)
	}
}
