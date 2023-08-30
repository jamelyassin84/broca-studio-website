import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Slider } from '../models/system/slider.model'

@Injectable({ providedIn: 'root' })
export class SliderService {
	readonly currentSlide$ = new Subject<Slider>()
}
