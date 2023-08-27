import { BehaviorSubject } from 'rxjs'

import { Injectable } from '@angular/core'

/**
 * Service for managing modal state.
 */
@Injectable({ providedIn: 'root' })
export class Modal {
	/**
	 * A BehaviorSubject representing the open/close state of the modal.
	 */
	readonly opened$: BehaviorSubject<boolean> = new BehaviorSubject(false)
}
