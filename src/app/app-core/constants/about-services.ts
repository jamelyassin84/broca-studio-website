import { AboutService } from '../models/system/about-service.model'

export const ABOUT_SERVICES: AboutService[] = [
	{
		title: 'بروكا لاب',
		description:
			'يقـدم هـذا المختبـر استشـارات إبداعيـة ويعمـل علـى بنـاء المحتـوى الابداعـي لمختلــف وســائل التواصــل التقليديــة والرقميــة',
		icon: '../../../assets/app/about-us/icons/drop.svg',
		features: [' الكتابة الإبداعية', ' صناعة المحتوى'],
	},

	{
		title: 'بروكا استديوز',
		description:
			'تعمــل هــذه االســتديوهات فــي مجــال الإنتاج الســينمائي ورســم الأنميشن والرسومــــــــــات ثالثيـة األبعاد.وتوظيـف مختلــف تقنيــات ',
		icon: '../../../assets/app/about-us/icons/movie.svg',
		features: [' الكتابة الإبداعية', ' صناعة المحتوى'],
	},

	{
		title: 'بروكا اركيد',
		description:
			'تقـوم بـروكا اركيـد ببنـاء وتصميـم وتطويـر الالعاب  باسـتخدام عـدد منالمحركات الشـهيرة فــي صناعــة الألعاب، مثــل Unity و Engine Unreal وغيرهــا مــن المحــركات الشهيرة',
		icon: '../../../assets/app/about-us/icons/chess.svg',
		features: [' الكتابة الإبداعية', ' صناعة المحتوى'],
	},
]
