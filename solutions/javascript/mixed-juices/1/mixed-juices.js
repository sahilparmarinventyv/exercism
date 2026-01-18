// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

const time_to_prep_drink = {
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5
}

export function timeToMixJuice(name) {

  if(name in time_to_prep_drink){
    return time_to_prep_drink[name]
  }
  return 2.5
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const wedges = {
    'small': 6,
    'medium': 8,
    'large': 10
  }

  let curr_wedge = 0
  let i = 0

  while (curr_wedge < wedgesNeeded){
    if(limes[i]){
      curr_wedge += wedges[limes[i]]
      i += 1
    }
    else{
      return i
    }
  }
  return i
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while(timeLeft > 0){
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()
  }
  return orders
}
