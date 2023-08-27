import { LoadingStateEnum } from '@broca-studio/enums/loading-state.enum'
import { LoadingTypeEnum } from '@broca-studio/enums/loading-type.enum'

/**
 * Represents the base model for PHP.
 * @interface
 */
export interface PHPBaseModel {
	/** The unique identifier of the model. */
	id?: string
	/** The timestamp when the model was created. */
	created_at?: string
	/** The timestamp when the model was last updated. */
	updated_at?: string
}

/**
 * Represents the base model for Node.js.
 * @interface
 */
export interface NodeBaseModel {
	/** The unique identifier of the model. */
	id?: string
	/** The timestamp when the model was created. */
	createdAt?: Date
	/** The timestamp when the model was last updated. */
	updatedAt?: Date
}

/**
 * Represents a PHP file model.
 * @interface
 */
export interface PHPFile extends PHPBaseModel {
	/** The name of the file. */
	name: string
	/** The path to the file. */
	path: string
	/** The URL to access the file. */
	url: string
	/** The extension of the file. */
	extension: string
	/** The MIME type of the file. */
	mime_type: string
	/** The size of the file in bytes. */
	size: number
}

/**
 * Represents a Nest.js file model.
 * @interface
 */
export interface NestFile extends NodeBaseModel {
	/** The authentication identifier associated with the file. */
	authId: string
	/** The authentication type associated with the file. */
	authType: string
	/** The URL to access the file. */
	url: string
	/** The type of the file. */
	type: string
}

/**
 * Represents a mapping of countries to cities.
 * @interface
 */
export interface CountryWithCity {
	[key: string]: string[]
}

/**
 * Represents a dial code.
 * @interface
 */
export interface DialCode {
	/** The name of the country. */
	name: string
	/** The dial code of the country. */
	dial_code: string
	/** The code of the country. */
	code: string
}

/**
 * Represents country ISO data.
 * @interface
 */
export interface CountryISO {
	/** The name of the country. */
	name: string
	/** The alpha-2 code of the country. */
	'alpha-2': string
	/** The alpha-3 code of the country. */
	'alpha-3': string
	/** The country code. */
	'country-code': string
	/** The ISO 3166-2 code of the country. */
	'iso_3166-2': string
	/** The region of the country. */
	region: string
	/** The sub-region of the country. */
	'sub-region': string
	/** The intermediate region of the country. */
	'intermediate-region': string
	/** The region code of the country. */
	'region-code': string
	/** The sub-region code of the country. */
	'sub-region-code': string
	/** The intermediate region code of the country. */
	'intermediate-region-code': string
}

/**
 * Represents a Google Map style.
 * @interface
 */
export interface GoogleMapStyle {
	/** The feature type. */
	featureType: string
	/** The element type. */
	elementType: string
	/** The stylers for the map style. */
	stylers: { [key: string]: string | number }[]
}

/**
 * Represents a response from Laravel.
 * @interface
 */
export interface LaravelResponse<T> {
	/** The data object containing the model data. */
	data: { data: T }
}

/**
 * Represents geographical coordinates.
 * @interface
 */
export interface Coordinates {
	/** The latitude coordinate. */
	latitude: number
	/** The longitude coordinate. */
	longitude: number
}

/**
 * Represents an entity.
 * @interface
 */
export interface Entity<T> {
	/** A dictionary of entities indexed by their unique IDs. */
	entities: { [key: string]: T }
	/** An array of unique IDs representing the entities. */
	ids: string[]
}

/**
 * Represents a response from Node.js with pagination meta data.
 * @interface
 */
export interface NodeResponse<T> {
	/** The data object containing the model data. */
	data: T
	/** The metadata related to pagination. */
	meta: NodePaginationMeta
}

/**
 * Represents pagination meta data.
 * @interface
 */
export interface NodePaginationMeta {
	/** The total number of items. */
	total: number
	/** The number of items per page. */
	per_page: number
	/** The current page number. */
	current_page: number
	/** The last page number. */
	last_page: number
	/** The first page number. */
	first_page: number
	/** The URL of the first page. */
	first_page_url: string
	/** The URL of the last page. */
	last_page_url: string
	/** The URL of the next page or null if it doesn't exist. */
	next_page_url: null
	/** The URL of the previous page or null if it doesn't exist. */
	previous_page_url: null
}

/**
 * Represents an alert.
 * @interface
 */
export interface Alert {
	/** The unique identifier of the alert. */
	id?: string
	/** The title of the alert. */
	title: string
	/** The message content of the alert. */
	message: string
	/** The type of the alert (success, info, error). */
	type: 'success' | 'info' | 'error'
}

/**
 * Represents an unpaged PHP response.
 * @interface
 */
export interface PHPUnPaginatedResponse<T> {
	/** The data object containing the model data. */
	data: T
}

/**
 * Represents a paged PHP response.
 * @interface
 */
export interface PHPPaginatedResponse<T> {
	/** An array of model data. */
	data: T[]
	/** Links to navigate between pages. */
	links: {
		/** URL to the first page. */
		first: string
		/** URL to the last page. */
		last: string
		/** URL to the next page or null if it doesn't exist. */
		next: string | null
		/** URL to the previous page or null if it doesn't exist. */
		prev: string | null
	}
	/** Metadata related to pagination. */
	meta: {
		/** The current page number. */
		current_page: number
		/** The starting index of items on the current page. */
		from: number
		/** The last page number. */
		last_page: number
		/** The URL path for the current page. */
		path: string
		/** The number of items displayed per page. */
		per_page: number
		/** The ending index of items on the current page. */
		to: number
		/** The total number of items. */
		total: number
		/** Links to specific pages. */
		links: {
			/** Indicates if the link is active. */
			active: boolean
			/** The label for the link. */
			label: string
			/** The URL for the link or null if it doesn't exist. */
			url: null | string
		}[]
	}
}

/**
 * Represents a loading state.
 * @interface
 */
export interface LoadingState {
	/** The state of loading (idle, succeeded, failed, loading). */
	state: LoadingStateEnum
	/** The type of loading (create, update, get, findOne, remove). */
	type: LoadingTypeEnum
}

/**
 * Represents a set of loaders.
 * @interface
 */
export interface StoreLoaders {
	/** The loading state for creating. */
	createLoader: LoadingStateEnum
	/** The loading state for updating. */
	updateLoader: LoadingStateEnum
	/** The loading state for getting. */
	getLoader: LoadingStateEnum
	/** The loading state for finding one. */
	findOneLoader: LoadingStateEnum
	/** The loading state for removing. */
	removeLoader: LoadingStateEnum
}

/**
 * Represents an HTML input event.
 * @interface
 */
export interface HTMLInputEvent extends Event {
	/** The target HTML input element. */
	target: HTMLInputElement & EventTarget
}

/**
 * Represents a pagination link.
 * @interface
 */
export interface PaginationLink {
	/** The URL for the pagination link or null if it doesn't exist. */
	url: string | null
	/** The label for the pagination link. */
	label: string
	/** Indicates if the pagination link is active. */
	active: boolean
}

/**
 * Represents a time of day.
 */
export interface Time {
	/**
	 * The hours component of the time (0-23).
	 */
	hours: number

	/**
	 * The minutes component of the time (0-59).
	 */
	minutes: number

	/**
	 * The seconds component of the time (0-59).
	 */
	seconds: number

	/**
	 * The milliseconds component of the time (0-999).
	 */
	milliseconds: number
}

/**
 * Represents breakpoints for responsive design.
 */
export interface BreakPoint {
	/**
	 * Breakpoint for phones (screens smaller than tablets).
	 */
	phone: number

	/**
	 * Breakpoint for tablets (screens larger than phones but smaller than laptops).
	 */
	tablet: number

	/**
	 * Breakpoint for laptops (screens larger than tablets but smaller than desktops).
	 */
	laptop: number

	/**
	 * Breakpoint for desktops (screens larger than laptops).
	 */
	desktop: number

	/**
	 * Maximum screen width (no upper limit).
	 */
	max: number
}
