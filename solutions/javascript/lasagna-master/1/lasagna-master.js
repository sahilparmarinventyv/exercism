/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to  them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
  *  function yourFunction(...) {
 *   ...
 * }
 */

 export function cookingStatus(timer){
   if(timer == 0){
     return "Lasagna is done."
   }
   else if(timer >= 0){
     return "Not done, please wait."
   }
   return "You forgot to set the timer."
 }

export function preparationTime(layers, timePerLayer){

  if(timePerLayer == undefined) var timePerLayer = 2
  var res = layers.length * timePerLayer
  return res
}


 export function quantities(layers){
   const obj = {
     noodles: 0,
     sauce: 0,
   }

  for(let i=0;i<layers.length;i++){
    if(layers[i] === "noodles") 
      obj.noodles += 50
    else if(layers[i] === "sauce") 
      obj.sauce += 0.2
  }

   return obj
}

export function addSecretIngredient(frdList, myList){
  let secretInd = frdList[frdList.length - 1]
  console.log(secretInd)
  myList.push(secretInd)  
}

export function scaleRecipe(recipe1, portionSize){
  let recipe2 = {}

  for(let key in recipe1){
    recipe2[key] = recipe1[key] * (portionSize / 2)
    console.log(key,recipe2[key])
  }

  console.log(recipe1)
  console.log(recipe2)

  return recipe2
}