/**
 * Updates a URL by adding a segment to its pathname.
 *
 * @param {string} url - The original URL.
 * @param {string} segment - The segment to add to the pathname.
 * @returns {string} - The updated URL with the new segment.
 */
export function updateUrlSegment(url: string, segment: string): string {
	const urlObj = new URL(url)
	urlObj.pathname = segment + urlObj.pathname
	return urlObj.toString()
}
