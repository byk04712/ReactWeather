/**
 * @flow
 */

'use strict';

import { ActionTypes } from './types';

import * as WeatherService from '../services/weather';


/**
 * 获取所有天气
 * @returns {Function}
 */
function getAllWeather() {
    return (dispatch: any) => {
        WeatherService.getAllWeather(false).then(
            (result) => {
                console.log('result = ', result);
                debugger;
                //dispatch({
                //    type: ActionTypes.WEATHER_GET_ALL,
                //    data: result
                //});
                //
                //var dates = result.map((item) => item.freshness);
                //var freshness = new Date(Math.min(...dates));
                //if (getAgeInSeconds(freshness) > maxAgeInSeconds) {
                //    dispatch(setWeatherRefreshing());
                //    dispatch(forceWeatherUpdate());
                //}
            }
        );
    };
}

async function forceWeatherUpdate() {
    var result = await WeatherService.getAllWeather(true);
    return {
        type: ActionTypes.WEATHER_GET_ALL,
        data: result
    };
}

function getAgeInSeconds(freshness: Date) {
    return Math.floor((Date.now() - freshness.getTime()) / 1000);
}

function setWeatherLoading() {
    return {
        type: ActionTypes.WEATHER_SET_LOADING
    };
}

function setWeatherRefreshing() {
    return {
        type: ActionTypes.WEATHER_SET_REFRESHING
    };
}

module.exports = {
    getAllWeather,
    setWeatherLoading,
    setWeatherRefreshing
};
