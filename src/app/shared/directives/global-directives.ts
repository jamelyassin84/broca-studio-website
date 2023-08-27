import { AnimateJsDirective } from '@broca-studio/directives/animate.js.directive'
import { FileDropZoneDirective } from '@broca-studio/directives/file-drop-zone.directive'
import { ParallaxDirective } from '@broca-studio/directives/parralax.directive'
import { StopPropagationDirective } from '@broca-studio/directives/stop.propagation.directive'
import { AutoSizeDirective } from '@broca-studio/directives/textarea-autosize.directive'

export const globalDirectives = [
	ParallaxDirective,
	AutoSizeDirective,
	AnimateJsDirective,
	FileDropZoneDirective,
	StopPropagationDirective,
]
