import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable, Optional } from '@angular/core'
import { LocalStorageEnum } from 'app/app-core/enums/local-storage-enum'
import { environment } from 'environments/environment'
import { Observable } from 'rxjs'

/**
 * Represents an API service for making HTTP requests recommended for extending this in the class and add super on constructor.
 * @example
 * // Usage example:
 * export class MyClass extends API {
 *      construction(_http:HttpClient){
 *          super(_http,'endpoint')
 *     }
 * }
 * @class
 */
@Injectable({
	providedIn: 'root',
})
export class API {
	/**
	 * Creates an instance of the API service.
	 *
	 * @constructor
	 * @param {HttpClient} _http - The HttpClient service for making HTTP requests.
	 * @param {string} _url - The base URL for API requests (optional).
	 */
	constructor(
		@Optional()
		public _http: HttpClient,
		@Inject('url')
		public _url: string = '',
	) {}

	/**
	 * The authentication token used for API requests.
	 *
	 * @type {string | undefined | unknown}
	 */
	token: string | undefined | unknown = undefined

	/**
	 * Generate HTTP headers with an authorization token.
	 *
	 * @private
	 * @returns {{ headers: HttpHeaders }} The HTTP headers object.
	 */
	private headers(): { headers: HttpHeaders } {
		const token = localStorage.getItem(LocalStorageEnum.ACCESS_TOKEN)

		let headers: any = {
			Accept: 'application/json',
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + token,
		}

		if (token === undefined) {
			delete headers['Authorization']
		}

		return {
			headers: new HttpHeaders(headers),
		}
	}

	/**
	 * Perform a paginated GET request.
	 *
	 * @param {string} url - The URL for the GET request.
	 * @param {string} [param=''] - Optional query parameters.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const result$ = apiService.paginate<MyData>('/api/data', '?page=1');
	 * result$.subscribe(data => console.log(data));
	 */
	paginate<T>(url: string, param: string = ''): Observable<T> {
		return this._http.get<T>(url + param, this.headers())
	}

	/**
	 * Perform a GET request.
	 *
	 * @template T
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const result$ = apiService.get<MyData>();
	 * result$.subscribe(data => console.log(data));
	 */
	get<T>(): Observable<T> {
		return this._http.get<T>(
			`${environment.api}${this._url}`,
			this.headers(),
		)
	}

	/**
	 * Perform a custom GET request with additional parameters.
	 *
	 * @template T
	 * @param {string} param - The custom parameters to append to the URL.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const result$ = apiService.custom<MyData>('/custom-endpoint?filter=example');
	 * result$.subscribe(data => console.log(data));
	 */
	custom<T>(param: string): Observable<T> {
		return this._http.get<T>(
			`${environment.api}${this._url}${param}`,
			this.headers(),
		)
	}

	/**
	 * Perform a GET request with query string parameters.
	 *
	 * @template T
	 * @param {{ [key: string]: string }} queryStringParam - The query string parameters.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const queryParams = { page: '1', filter: 'example' };
	 * const result$ = apiService.query<MyData>(queryParams);
	 * result$.subscribe(data => console.log(data));
	 */
	query<T>(queryStringParam: { [key: string]: string }): Observable<T> {
		return this._http.get<T>(
			`${environment.api}${this._url}?${new URLSearchParams(
				queryStringParam,
			)}`,
			this.headers(),
		)
	}

	/**
	 * Perform a GET request with redirection.
	 *
	 * @template T
	 * @param {string} param - The redirection parameter.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const result$ = apiService.redirect<MyData>('/redirect-endpoint');
	 * result$.subscribe(data => console.log(data));
	 */
	redirect<T>(param: string): Observable<T> {
		return this._http.get<T>(
			`${environment.api}${this._url}${param}`,
			this.headers(),
		)
	}

	/**
	 * Perform a custom POST request with additional parameters.
	 *
	 * @template T
	 * @param {string} param - The custom parameters to append to the URL.
	 * @param {Object} data - The data to be sent in the request body.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const customData = { param1: 'value1', param2: 'value2' };
	 * const result$ = apiService.postCustom<MyData>('/custom-endpoint', customData);
	 * result$.subscribe(data => console.log(data));
	 */
	postCustom<T>(param: string, data: Object): Observable<T> {
		return this._http.post<T>(
			`${environment.api}${this._url}${param}`,
			data,
			this.headers(),
		)
	}

	/**
	 * Retrieve a resource by its ID.
	 *
	 * @template T
	 * @param {string | number} id - The ID of the resource to retrieve.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const result$ = apiService.findOne<MyData>('123');
	 * result$.subscribe(data => console.log(data));
	 */
	findOne<T>(id: string | number): Observable<T> {
		return this._http.get<T>(
			`${environment.api}${this._url}/${id}`,
			this.headers(),
		)
	}

	/**
	 * Perform a POST request with file data.
	 *
	 * @template T
	 * @param {Object} data - The data to be sent in the request body as a file.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const fileData = { file: selectedFile };
	 * const result$ = apiService.postWithFile<MyData>(fileData);
	 * result$.subscribe(data => console.log(data));
	 */
	postWithFile<T>(data: Object): Observable<T> {
		let form = new FormData()

		for (const key in data) {
			form.append(key, data[key])
		}

		return this._http.post<T>(
			`${environment.api}${this._url}`,
			form,
			this.headers(),
		)
	}

	/**
	 * Perform a POST request with JSON data.
	 *
	 * @template T
	 * @param {Object} data - The data to be sent in the request body as JSON.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const jsonData = { key1: 'value1', key2: 'value2' };
	 * const result$ = apiService.post<MyData>(jsonData);
	 * result$.subscribe(data => console.log(data));
	 */
	post<T>(data: Object): Observable<T> {
		return this._http.post<T>(
			`${environment.api}${this._url}`,
			data,
			this.headers(),
		)
	}

	/**
	 * Perform a PUT request with JSON data.
	 *
	 * @template T
	 * @param {Object} data - The data to be sent in the request body as JSON.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const jsonData = { key1: 'value1', key2: 'value2' };
	 * const result$ = apiService.put<MyData>(jsonData);
	 * result$.subscribe(data => console.log(data));
	 */
	put<T>(data: Object): Observable<T> {
		return this._http.put<T>(
			`${environment.api}${this._url}`,
			data,
			this.headers(),
		)
	}

	/**
	 * Perform an update request with file data using the Node.js method.
	 *
	 * @template T
	 * @param {string | number | false} id - The ID of the resource to update (false for new resource).
	 * @param {FormData | any} data - The data to be sent in the request body, including file(s).
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const fileData = { file: selectedFile };
	 * const result$ = apiService.updateWithFileNode<MyData>('123', fileData);
	 * result$.subscribe(data => console.log(data));
	 */
	updateWithFileNode<T>(
		id: string | number | false,
		data: FormData | any,
	): Observable<T> {
		let form = new FormData()

		for (const key in data) {
			form.append(key, data[key])
		}

		return this._http.patch<T>(
			`${environment.api}${this._url}${id !== false ? `/${id}` : ''}`,
			form,
			this.headers(),
		)
	}

	/**
	 * Perform an update request with file data using the PHP method.
	 *
	 * @template T
	 * @param {string | number | false} id - The ID of the resource to update (false for new resource).
	 * @param {FormData | any} data - The data to be sent in the request body, including file(s).
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const fileData = { file: selectedFile };
	 * const result$ = apiService.updateWithFilePHP<MyData>('123', fileData);
	 * result$.subscribe(data => console.log(data));
	 */
	updateWithFilePHP<T>(
		id: string | number | false,
		data: FormData | any,
	): Observable<T> {
		let form = new FormData()

		for (const key in data) {
			form.append(key, data[key])
		}

		form.append('_method', 'PUT')

		return this._http.post<T>(
			`${environment.api}${this._url}${id ?? `/${id}`}`,
			form,
			this.headers(),
		)
	}

	/**
	 * Perform a PUT request with JSON data to update a resource.
	 *
	 * @template T
	 * @param {string | number | false} id - The ID of the resource to update (false for new resource).
	 * @param {Object} data - The data to be sent in the request body as JSON.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const jsonData = { key1: 'value1', key2: 'value2' };
	 * const result$ = apiService.update<MyData>('123', jsonData);
	 * result$.subscribe(data => console.log(data));
	 */
	update<T>(id: string | number | false, data: Object): Observable<T> {
		return this._http.put<T>(
			`${environment.api}${this._url}${id ?? `/${id}`}`,
			data,
			this.headers(),
		)
	}

	/**
	 * Perform a custom PATCH request with additional parameters.
	 *
	 * @template T
	 * @param {string} param - The custom parameters to append to the URL.
	 * @param {Object} data - The data to be sent in the request body.
	 * @returns {Observable<T>} An Observable of the HTTP response.
	 * @example
	 * // Usage example:
	 * const customData = { param1: 'value1', param2: 'value2' };
	 * const result$ = apiService.patchCustom<MyData>('/custom-endpoint', customData);
	 * result$.subscribe(data => console.log(data));
	 */
	patchCustom<T>(param: string, data: Object): Observable<T> {
		return this._http.patch<T>(
			`${environment.api}${this._url}${param}`,
			data,
			this.headers(),
		)
	}

	/**
	 * Remove a resource.
	 * @param id - The ID of the resource to remove.
	 * @returns An observable with the response.
	 */
	remove<T>(id: string | number): Observable<T> {
		return this._http.delete<T>(
			`${environment.api}${this._url}/${id}`,
			this.headers(),
		)
	}

	/**
	 * Remove a resource with custom parameters.
	 * @param param - Custom parameter for the resource.
	 * @param id - The ID of the resource to remove.
	 * @returns An observable with the response.
	 */
	removeCustom<T>(param: string, id: string | number): Observable<T> {
		return this._http.delete<T>(
			`${environment.api}${this._url}${param}/${id}`,
			this.headers(),
		)
	}
}
