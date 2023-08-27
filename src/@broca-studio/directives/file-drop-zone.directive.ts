import {
	Directive,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	Output,
	Renderer2,
} from '@angular/core'

/**
 * Angular directive for creating a file drop zone to handle dropped files.
 */
@Directive({
	selector: '[fileDropZone]',
})
export class FileDropZoneDirective {
	constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
		// Make the element draggable.
		this._renderer.setProperty(
			this._elementRef.nativeElement,
			'draggable',
			true,
		)
	}

	/**
	 * Event emitted when files are dropped into the drop zone.
	 */
	@Output()
	onDrop = new EventEmitter<FileList>()

	/**
	 * Indicates whether multiple files can be dropped.
	 */
	@Input({ required: false })
	multiple?: boolean

	/**
	 * Array of accepted file types (MIME types or file extensions).
	 */
	@Input({ required: false })
	accept?: string[]

	/**
	 * Maximum allowed file size in bytes.
	 */
	@Input({ required: false })
	maxFileSize?: number

	/**
	 * Event handler for the 'drop' event.
	 * @param event - The 'drag' event containing dropped files.
	 */
	@HostListener('drop', ['$event'])
	readFileDrop(event: DragEvent) {
		event.preventDefault()
		event.stopPropagation()

		const files = event.dataTransfer?.files

		if (event.dataTransfer!.files.length > 0) {
			const reader: FileReader = new FileReader()

			reader.readAsDataURL(event.dataTransfer!.files[0])

			// Emit the 'onDrop' event with the dropped files when file reading starts.
			reader.onloadstart = () => this.onDrop.emit(files)
		}
	}

	/**
	 * Event handler for the 'dragover' event.
	 * @param event - The 'dragover' event.
	 */
	@HostListener('dragover', ['$event'])
	onDragOver(event: DragEvent) {
		event.preventDefault()
		event.stopPropagation()
	}
}
