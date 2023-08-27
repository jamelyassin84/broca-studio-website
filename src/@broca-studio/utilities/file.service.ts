import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { NodeResponse, PHPFile } from '@broca-studio/models/core.model'
import { FileApi } from 'app/app-core/http/api/file.api'

/**
 * Service for handling file-related operations.
 */
@Injectable({ providedIn: 'root' })
export class FileService {
	constructor(private _fileAPI: FileApi) {}

	/**
	 * Get the selected file from an input event.
	 * @param event - The HTML input event containing the selected file(s).
	 * @returns The selected file if a single file is chosen, or a FileList if multiple files are chosen.
	 */
	getFile(event: HTMLInputEvent): File | FileList {
		if (event.target.files && event.target.files.length === 1) {
			return event.target.files[0]
		}
		return event.target.files
	}

	/**
	 * Upload a file to the server.
	 * @param file - The file to upload.
	 * @returns An observable of the uploaded PHPFile.
	 */
	upload(file: File): Observable<PHPFile> {
		let form = new FormData()
		form.append('file', file)

		return this._fileAPI.post(form)
	}

	/**
	 * Get preview URL(s) for the given file(s).
	 * @template T - The type of file(s).
	 * @param file - The file(s) for which to generate preview URL(s).
	 * @returns A promise that resolves to a single preview URL or an array of preview URLs.
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
}

/**
 * Represents a preview URL which can be a string or an ArrayBuffer.
 */
export type Preview = string | ArrayBuffer

/**
 * Represents an HTML input event with a specific target type.
 */
export interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget
}
