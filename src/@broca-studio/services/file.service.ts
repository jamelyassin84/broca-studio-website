import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { NodeResponse, PHPFile } from '@broca-studio/models/core.model'
import { FileApi } from 'app/app-core/http/api/file.api'

/**
 * Service for managing files.
 */
@Injectable({ providedIn: 'root' })
export class FileService {
	constructor(private _fileApi: FileApi) {}

	/**
	 * Get a file or a list of files from an HTML input event.
	 * @param {HTMLInputEvent} event The HTML input event.
	 * @returns {File | FileList} The File or FileList object.
	 */
	getFile(event: HTMLInputEvent): File | FileList {
		if (event.target.files && event.target.files.length === 1) {
			return event.target.files[0]
		}
		return event.target.files
	}

	/**
	 * Upload a file to the server.
	 * @param {File} file The file to upload.
	 * @returns {Observable<PHPFile>} An observable containing the uploaded PHPFile.
	 */
	upload(file: File): Observable<PHPFile> {
		let form = new FormData()
		form.append('file', file)

		return this._fileApi.post(form)
	}

	/**
	 * Get the preview URL(s) for a file or a list of files.
	 * @param {T} file The file(s) for which to get preview URLs.
	 * @returns {Promise<Preview | Preview[]>} A promise resolving to the preview URL(s).
	 */
	async getPreviewURL<T>(file: T): Promise<Preview | Preview[]> {
		return new Promise((resolve) => {
			const reader = new FileReader()

			if ((file as any).length === 0) {
				let urls = []

				Array.from(file as any).forEach(() => {
					reader.onload = () => {
						urls.push(reader.result)
					}

					resolve(urls)
				})
			}
			reader.readAsDataURL(file as any)

			reader.onload = () => {
				resolve(reader.result)
			}
		})
	}

	/**
	 * Check if the input is a File object.
	 * @param {any} input The input to check.
	 * @returns {boolean} True if the input is a File object, false otherwise.
	 */
	isFile(input: any): boolean {
		if ('File' in window && input instanceof File) return true
		else return false
	}

	/**
	 * Check if the input is a Blob object.
	 * @param {any} input The input to check.
	 * @returns {boolean} True if the input is a Blob object, false otherwise.
	 */
	isBlob(input: any): boolean {
		if ('Blob' in window && input instanceof Blob) return true
		else return false
	}
}

/**
 * Type representing a file preview.
 */
export type Preview = string | ArrayBuffer

/**
 * Interface for an HTML input event.
 */
export interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget
}
