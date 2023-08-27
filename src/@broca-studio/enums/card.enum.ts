/**
 * Enum representing various card types.
 *
 * @remarks
 * This enum defines different types of credit cards, including their names and codes.
 * It can be used to categorize and identify credit card types.
 *
 * @example
 * // Import the CardEnum enum:
 * import { CardEnum } from './your-card-enum-file';
 *
 * // Usage in TypeScript code:
 * const selectedCard = CardEnum.VISA;
 *
 * if (selectedCard === CardEnum.VISA) {
 *   console.log('Selected card type is VISA.');
 * }
 *
 * // Usage in Angular template:
 * <!-- Assuming 'cardType' is a variable containing a card type -->
 * <div *ngIf="cardType === CardEnum.MASTER_CARD">
 *   This is a MasterCard.
 * </div>
 */
export enum CardEnum {
	JCB = 'JCB',
	VISA = 'visa',
	UNKNOWN = 'Unknown',
	DISCOVER = 'Discover',
	UNION_PAY = 'UnionPay',
	MASTER_CARD = 'mastercard',
	AMERICAN_EXPRESS = 'American Express',
}
