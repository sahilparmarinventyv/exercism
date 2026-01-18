// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return "NCC-" + Math.floor(((Math.random() * (9999 - 1000 + 1)) + 1000))
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000.0 - 41000.0) + 41000.0
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const letters = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  const index = Math.floor(Math.random() * letters.length)
  return letters[index]
}
