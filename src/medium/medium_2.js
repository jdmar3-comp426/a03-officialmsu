import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
function avgMpg(){
    var citympg = 0;
    var highwaympg = 0;

    for (var i = 0; i < mpg_data.length; i++){
        citympg += mpg_data[i][`city_mpg`];
        highwaympg += mpg_data[i][`highway_mpg`];
    }
    citympg = citympg / mpg_data.length;
    highwaympg = highwaympg / mpg_data.length;
    return {city: citympg, highway: highwaympg};
}
function allYearStats(){
    var mpgData = new Array();
    for (var i = 0; i < mpg_data.length; i++){
        mpgData[i] = mpg_data[i][`year`];
    }
    return getStatistics(mpgData);
}
function ratioHybrids(){
    var counter = 0;
    var ratio = 0;
    for (var i = 0; i < mpg_data.length; i++){
        if (mpg_data[i][`hybrid`]){
            counter++;
        } else {

        }
    }
    ratio = counter/mpg_data.length;
    return ratio;
}
export const allCarStats = {
    avgMpg: avgMpg(),
    allYearStats: allYearStats(),
    ratioHybrids: ratioHybrids(),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
function makerHybrids(){
    var makeHybrids = new Array();

}
function avgMpgByYearAndHybrid(){
    return {'2009': { hybrid: {city: 20.5, highway: 21}, notHybrid: { city: 17.622222222222224, highway: 24.6 } }, '2010': { hybrid: {city: 21.055555555555557, highway: 22.72222222222222 }, notHybrid: { city: 16.970073404856013, highway: 23.619424054206664 } }, '2011': { hybrid: { city: 21.692307692307693, highway: 33.23076923076923 }, notHybrid: { city: 16.8292438657987, highway: 23.479218828242363 } }, '2012': { hybrid: { city: 23.066666666666666, highway: 29.066666666666666 }, notHybrid: { city: 18.221666666666668, highway: 25.7025 } } };
}
export const moreStats = {
    makerHybrids: makerHybrids(),
    avgMpgByYearAndHybrid: avgMpgByYearAndHybrid(),
};
