import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { appStateModules } from './states/app.state.module'
import { angularMaterialModules } from './angular-material/angular-material-modules'
import { globalPipes } from './pipes/global-pipes'
import { sharedPipes } from './pipes/shared-pipes'
import { globalDirectives } from './directives/global-directives'
import { sharedDirectives } from './directives/shared-directives'
import { modalComponents } from './components/modal-components'
import { popUpComponents } from './components/pop-up-components'
import { sharedComponents } from './components/shared-components'
import {
	DefaultMatCalendarRangeStrategy,
	MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker'
import { previewComponents } from './components/preview-components'
import { AppEffects } from './states/app.effects'
import { globalForms } from './components/global-forms'
import { globalComponents } from './components/global-components'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule } from '@ngx-translate/core'

const pipes = [...globalPipes, ...sharedPipes]

const directives = [...globalDirectives, ...sharedDirectives]

const components = [
	...globalForms,
	...modalComponents,
	...popUpComponents,
	...sharedComponents,
	...globalComponents,
	...previewComponents,
]

const modules = [
	RouterModule,
	FormsModule,
	CommonModule,
	HttpClientModule,
	NgOptimizedImage,
	ReactiveFormsModule,
	TranslateModule.forChild(),

	...AppEffects,
	...appStateModules,
	...angularMaterialModules,
]

@NgModule({
	imports: [...modules],
	declarations: [...components, ...directives, ...pipes],
	exports: [...components, ...directives, ...pipes, ...modules],
	providers: [
		{
			provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
			useClass: DefaultMatCalendarRangeStrategy,
		},
	],
})
export class SharedModule {}
