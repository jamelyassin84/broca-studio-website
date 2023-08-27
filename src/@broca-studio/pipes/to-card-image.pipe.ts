import { Pipe, PipeTransform } from '@angular/core'
import { CardEnum } from '@broca-studio/enums/card.enum'

/**
 * A pipe that converts a card type enum value to the corresponding card image URL.
 *
 * @usageNotes
 * To use this pipe, pass a card type enum value as input, and it will return the URL of the corresponding card image.
 *
 * @example
 * ```html
 * <!-- Assuming 'cardType' is a CardEnum value -->
 * <img [src]="cardType | to_card_image" alt="Card Image">
 * ```
 * In this example, the `to_card_image` pipe is used to set the `src` attribute of an `img` tag to display the card image.
 */
@Pipe({ name: 'to_card_image', pure: true })
export class ToCardImagePIpe implements PipeTransform {
	/**
	 * Converts a card type enum value to the corresponding card image URL.
	 *
	 * @param {CardEnum} type - The card type enum value.
	 * @returns {string} - The URL of the corresponding card image.
	 */
	transform(type: CardEnum): string {
		return to_card_image(type)
	}
}

/**
 * Converts a card type enum value to the corresponding card image URL.
 *
 * @param {CardEnum} type - The card type enum value.
 * @returns {string} - The URL of the corresponding card image.
 */
export function to_card_image(type: CardEnum): string {
	const directory = `/assets/payment-methods/`

	if (type === CardEnum.JCB) {
		return `${directory}jcb.png`
	}

	if (type === CardEnum.VISA) {
		return `${directory}visa.png`
	}

	if (type === CardEnum.DISCOVER) {
		return `${directory}discover.svg`
	}

	if (type === CardEnum.UNION_PAY) {
		return `${directory}china_union_pay.png`
	}

	if (type === CardEnum.MASTER_CARD) {
		return `${directory}mastercard.png`
	}

	if (type === CardEnum.AMERICAN_EXPRESS) {
		return `${directory}american_expreess.png`
	}

	return `${directory}unknown.jpg`
}
