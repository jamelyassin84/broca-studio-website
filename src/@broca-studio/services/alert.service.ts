// import { Injectable } from '@angular/core'
// import { select, Store } from '@ngrx/store'
// import * as uuid from 'uuid'
// import { map, take } from 'rxjs/operators'
// import { AppState } from 'app/app-core/store/core/app.state'
// import { StateEnum } from 'app/app-core/store/core/state.enum'
// import { TransformEntity } from '@broca-studio/helpers/transform-entity'
// import { Alert } from '@broca-studio/models/core.model'
// import { StoreAction } from 'app/app-core/store/core/action.enum'

// /**
//  * Service for managing alerts.
//  */
// @Injectable({ providedIn: 'root' })
// export class AlertService {
// 	constructor(private _store: Store<AppState>) {}

// 	/**
// 	 * Adds an alert to the store.
// 	 * @param {Alert} alert The alert to be added.
// 	 */
// 	addAlert(alert: Alert) {
// 		this._store.dispatch(
// 			StoreAction.ALERT.addAlert({ alert: { ...alert, id: uuid.v4() } }),
// 		)

// 		setTimeout(() => {
// 			this.pop()
// 		}, 4000)
// 	}

// 	/**
// 	 * Removes the oldest alert from the store.
// 	 */
// 	pop() {
// 		this._store
// 			.pipe(
// 				select(StateEnum.ALERTS),
// 				take(1),
// 				map((x) => new TransformEntity(x).toArray().reverse()),
// 			)
// 			.subscribe((alerts) => {
// 				if (alerts.length !== 0) {
// 					this._store.dispatch(
// 						StoreAction.ALERT.deleteAlert({
// 							id: alerts[0].id,
// 						}),
// 					)
// 				}
// 			})
// 	}

// 	/**
// 	 * Clears all alerts from the store.
// 	 */
// 	clear() {
// 		this._store.dispatch(StoreAction.ALERT.clearAlerts())
// 	}
// }
