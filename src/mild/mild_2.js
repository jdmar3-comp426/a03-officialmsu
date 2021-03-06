/**
 *
 * @param variable
 * @returns {{type: ("undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"), value: *}}
 * example: identifyVariable(4);
 * returns: { type: 'number', value: 4 }
 */
export function identifyVariable(variable) {
if (variable == null){
   return "{ type: 'undefined', value: '" + variable + "' }";
} else if (typeof(variable) == undefined){
   return "{ type: 'undefined', value: '" + variable + "' }";
} else if (typeof(variable) == "object"){
   return "{ type: 'object', value: '" + variable + "' }";
} else if (typeof(variable) == "boolean"){
   return "{ type: 'boolean', value: '" + variable + "' }";
} else if (typeof(variable) == "number"){
   return "{ type: 'number', value: '" + variable + "' }";
} else if (typeof(variable) == "string"){
   return "{ type: 'string', value: '" + variable + "' }";
} else if (typeof(variable) == "symbol"){
   return "{ type: 'symbol', value: '" + variable + "' }";
} else if (typeof(variable) == "bigint"){
   return "{ type: 'bigint', value: '" + variable + "' }";
}
}


/**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
 { type: 'string', value: 'some' },
 { type: 'number', value: 3 },
 { type: 'object', value: [ 3, 4 ] },
 { type: 'boolean', value: false }
 ]

 */
export function identifyArray(array) {
   var newarray = [];
  for (var i =0; i < array.length; i++){
   if (array[i] == null){
      newarray[i] =  "{ type: 'undefined', value: " + array[i] + " }";
   } else if (typeof(array[i]) == undefined){
      newarray[i] =  "{ type: 'undefined', value: " + array[i] + " }";
   } else if (typeof(array[i]) == "object"){
      newarray[i] =  "{ type: 'object', value: " + array[i] + " }";
   } else if (typeof(array[i]) == "boolean"){
      newarray[i] =  "{ type: 'boolean', value: " + array[i] + " }";
   } else if (typeof(array[i]) == "number"){
      newarray[i] =  "{ type: 'number', value: " + array[i] + " }";
   } else if (typeof(array[i]) == "string"){
      newarray[i] =  "{ type: 'string', value: " + array[i] + " }";
   } else if (typeof(array[i]) == "symbol"){
      newarray[i] =  "{ type: 'symbol', value: " + array[i] + " }";
   } else if (typeof(array[i]) == "bigint"){
      newarray[i] =  "{ type: 'bigint', value: " + array[i] + " }";
   }
   
  }
  return  "{ type: 'number', value: " + 21 + " },";
}

/**
 * mutates the object that is passed in.
 * @param object
 * @param key
 * @returns {*} does not have to return anything
 *
 * example:
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 removeKey(obj, 'password');
 obj now does not contain the `password` field
 */
export function removeKey(object, key) {
   delete object[key];

   return object;
}

/**
 * Does not mutate the object passed in
 * @param object
 * @param key
 * @returns {*} The object with its keys removed
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 obj = removeKeyNonDestructive(obj, 'password');
 obj will not have the `password` field only because it was assigned the result of the function.
 If only `removeKeyNonDestructive` was called, nothing would have changed.
 */
export function removeKeyNonDestructive(object, key) {
   var newobject = Object.assign({}, object);
   
   delete newobject[key];

   return newobject;

}

/**
 * Remove and return the listed keys. Without mutating the object passed in.
 * @param object
 * @param {string[]} keyList
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 * example:


 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 // object not looks like this
 { name: 'Mr. Boss', title: 'boss' }

 * @return {*} The object with its keys removed.
 */
export function removeKeys(object, keyList) {
   var newobject = Object.assign({}, object);

   for (var i = 0; i < keyList.length; i++){
      delete newobject[keyList[i]];
   }
   return newobject;
}
