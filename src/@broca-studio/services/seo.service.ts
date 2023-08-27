import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

/**
 * Service for managing SEO (Search Engine Optimization) related meta tags.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
	constructor(private meta: Meta, private titleService: Title) {}

	/**
	 * Returns the default SEO configuration.
	 * @returns Default SEO configuration object.
	 */
	default(): {
		title: string
		description: string
		image: string
		slug: string
	} {
		return {
			title: 'Jobs Global',
			description:
				'Job Portal | Recruitment System | Recruitment Agencies | Recruitment Site | Jobsglobal.com',
			image: './assets/app/logo.jpg',
			slug: '',
		}
	}

	/**
	 * Generates and updates meta tags based on the provided data.
	 * @param tags - SEO tags including title, description, image, and slug.
	 */
	generateTags(tags: {
		title?: string
		description?: string
		image?: string
		slug?: string
	}): void {
		tags = {
			title: 'Jobs Global',
			description:
				'Job Portal | Recruitment System | Recruitment Agencies | Recruitment Site | Jobsglobal.com',
			image: './assets/app/logo.jpg',
			slug: '',
			...tags,
		}

		this.titleService.setTitle(tags.title!)

		this.setTwitterMeta(tags)

		this.setOGMeta(tags)
	}

	/**
	 * Sets Open Graph (OG) meta tags.
	 * @param tags - SEO tags including title, description, image, and slug.
	 */
	private setOGMeta(tags: any): void {
		this.meta.updateTag({
			name: 'og:type',
			content: 'Website',
		})

		this.meta.updateTag({
			name: 'og:type',
			content: 'website',
		})

		this.meta.updateTag({
			name: 'og:site_name',
			content: 'Jobs Global',
		})

		this.meta.updateTag({
			name: 'og:title',
			content: tags.title,
		})

		this.meta.updateTag({
			name: 'og:description',
			content: tags.description,
		})

		this.meta.updateTag({
			name: 'og:image',
			content: tags.image,
		})
	}

	/**
	 * Sets Twitter meta tags.
	 * @param tags - SEO tags including title, description, image, and slug.
	 */
	private setTwitterMeta(tags: any): void {
		this.meta.updateTag({
			name: 'twitter:card',
			content: 'summary',
		})

		this.meta.updateTag({
			name: 'twitter:site',
			content: 'Jobs Global',
		})

		this.meta.updateTag({
			name: 'twitter:title',
			content: tags.title,
		})

		this.meta.updateTag({
			name: 'twitter:description',
			content: tags.description,
		})

		this.meta.updateTag({
			name: 'twitter:image',
			content: tags.image,
		})
	}
}
