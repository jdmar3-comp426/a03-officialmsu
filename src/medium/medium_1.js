import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    var newarray = new Array();
    var counter = 0;
    for (var i = 0; i < array.length; i++){
        
        if (array[i+1] != null){
            if (array[i] > array[i+1]){
                newarray[i] = array[i];
                array[i] = array[i+1];
                array[i+1] = newarray[i];
            }
        }
        
    }
    if (array.length % 2 == 0){
        var left = array[array.length/2];
        var right = array[array.length/2];
        var median = (left + right) /2;
        return median;
    } else {
        var median = Math.floor(array.length/2);
        return median;
    }
    
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var stats = {};
    var newarr = array;
    var newarray = new Array();
    var length = array.length;
    var sum = getSum(array);
    var median = getMedian(array);
    var mean;
    for (var i = 0; i < array.length; i++){
        mean = sum / length;
    }
    for (var i = 0; i < newarr.length; i++){
        
        if (newarr[i+1] != null){
            if (newarr[i] > newarr[i+1]){
                newarray[i] = newarr[i];
                newarr[i] = newarr[i+1];
                newarr[i+1] = newarray[i];
            }
        }
        
    }
    newarr = newarr.sort((a,b)=> a - b);
    var min = newarr[0];
    var max = newarr[length-1];
    var variancee = variance(array, mean);
    var standard_deviation = Math.sqrt(variancee);

    return {length: length, sum: sum, mean: mean, median: median, 
    min: min, max: max, variance: variancee, standard_deviation: standard_deviation};
}

