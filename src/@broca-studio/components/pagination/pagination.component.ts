import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { dbwAnimations } from '@broca-studio/animations/animation.api'
import { NodePaginationMeta } from '@broca-studio/models/core.model'

/**
 * Component for displaying pagination controls.
 */
@Component({
	selector: 'pagination',
	templateUrl: './pagination.component.html',
	animations: [...dbwAnimations],
})
export class PaginationComponent implements OnInit {
	constructor() {}

	/**
	 * Event emitter for page change events.
	 */
	@Output()
	onPageChange = new EventEmitter<string>()

	/**
	 * Input property representing the pagination information.
	 */
	@Input({ required: true })
	table?: NodePaginationMeta

	/**
	 * Lifecycle hook called after the component is initialized.
	 */
	ngOnInit(): void {}

	/**
	 * Function used to track items in a list by their index or unique identifier.
	 * @param index The index of the item in the list.
	 * @param item The item being tracked.
	 * @returns The item's unique identifier or index.
	 */
	trackByFn(index: number, item: any): any {
		return item.id || index
	}
}
