import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    return [ {    city_mpg: 10,    classification: 'Automatic transmission',    driveline: 'Rear-wheel drive',    engine_type: 'Maybach 6.0L 12 Cylinder 631 hp 738 ft-lbs Turbo',    fuel_type: 'Gasoline',    height: 38,    highway_mpg: 16,    horsepower: 631,    hybrid: false,    id: '2010 Maybach 57 Zeppelin',    length: 95,    make: 'Maybach',    model_year: '2010 Maybach 57',    number_of_forward_gears: 5,    torque: 738,    transmission: '5 Speed Automatic Select Shift',    width: 189,    year: 2010  },  {    city_mpg: 10,    classification: 'Automatic transmission',    driveline: 'Rear-wheel drive',    engine_type: 'Maybach 6.0L 12 Cylinder 631 hp 738 ft-lbs Turbo',    fuel_type: 'Gasoline',    height: 38,    highway_mpg: 16,    horsepower: 631,    hybrid: false,    id: '2010 Maybach 57 Zeppelin',    length: 95,    make: 'Maybach',    model_year: '2010 Maybach 57',    number_of_forward_gears: 5,    torque: 738,    transmission: '5 Speed Automatic Select Shift',    width: 189,    year: 2011  },  {    city_mpg: 10,    classification: 'Automatic transmission',    driveline: 'Rear-wheel drive',    engine_type: 'Maybach 6.0L 12 Cylinder 631 hp 738 ft-lbs Turbo',    fuel_type: 'Gasoline',    height: 38,    highway_mpg: 16,    horsepower: 631,    hybrid: false,    id: '2010 Maybach 62 Zeppelin',    length: 20,    make: 'Maybach',    model_year: '2010 Maybach 62',    number_of_forward_gears: 5,    torque: 738,    transmission: '5 Speed Automatic Select Shift',    width: 189,    year: 2010  }];
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    return [  {    city_mpg: 36,    classification: 'Automatic transmission',    driveline: 'Front-wheel drive',    engine_type: 'Kia 2.4L 4 Cylinder 166 hp 154 ft-lbs Hybrid',    fuel_type: 'Gasoline',    height: 170,    highway_mpg: 40,    horsepower: 166,    hybrid: true,    id: '2011 Kia Optima Hybrid',    length: 235,    make: 'Kia',    model_year: '2011 Kia Optima Hybrid',    number_of_forward_gears: 6,    torque: 154,    transmission: '6 Speed Automatic Select Shift',    width: 39,    year: 2011  },  {    city_mpg: 35,    classification: 'Automatic transmission',    driveline: 'Front-wheel drive',    engine_type: 'Hyundai 2.4L 4 Cylinder 166 hp 154 ft-lbs Hybrid',    fuel_type: 'Gasoline',    height: 185,    highway_mpg: 40,    horsepower: 166,    hybrid: true,    id: '2011 Hyundai Sonata Hybrid',    length: 212,    make: 'Hyundai',    model_year: '2011 Hyundai Sonata Hybrid',    number_of_forward_gears: 6,    torque: 154,    transmission: '6 Speed Automatic Select Shift',    width: 41,    year: 2011  }]
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    return [  {    city_mpg: 27,    classification: 'Automatic transmission',    driveline: 'Front-wheel drive',    engine_type: 'Kia 1.6L 4 Cylinder 138 hp 123 ft-lbs',    fuel_type: 'Gasoline',    height: 74,    highway_mpg: 35,    horsepower: 138,    hybrid: false,    id: '2012 Kia Soul AT',    length: 23,    make: 'Kia',    model_year: '2012 Kia Soul',    number_of_forward_gears: 6,    torque: 123,    transmission: '6 Speed Automatic',    width: 249,    year: 2012  }]
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    return [];
}
