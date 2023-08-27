import { Component, Input, OnInit } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { Alert } from '@broca-studio/models/core.model'

/**
 * Component for displaying alerts.
 */
@Component({
	selector: 'alert-component',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	animations: [...dbwAnimations],
})
export class AlertComponent implements OnInit {
	constructor() {}

	/**
	 * Input property representing the alert to display.
	 */
	@Input({ required: true })
	alert: Alert

	/**
	 * Lifecycle hook called after the component is initialized.
	 */
	ngOnInit(): void {}
}
