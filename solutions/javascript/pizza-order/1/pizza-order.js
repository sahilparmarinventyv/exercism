/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

var prices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
  }

export function pizzaPrice(pizza, ...extras) {

  let total_price = prices[pizza]

  for(const extra of extras){
    if(extra === 'ExtraSauce') total_price += 1
    else if(extra === 'ExtraToppings') total_price += 2
  }

  return total_price
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total_price = 0

  for(const order of pizzaOrders){
      const {pizza, extras} = order
      let curr_pizza_price = pizzaPrice(pizza, ...extras)
      total_price += curr_pizza_price
  }

  return total_price
}
