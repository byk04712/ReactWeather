/**
 * @flow
 */

'use strict';

import type { WeatherModel, Location, Postcode } from '../models/view';

export const ActionTypes = {
    'WEATHER_SET_LOADING': 'WEATHER_SET_LOADING',
    'WEATHER_SET_REFRESHING': 'WEATHER_SET_REFRESHING',
    'WEATHER_GET_ALL': 'WEATHER_GET_ALL',
    'LOCATION_INITIALISED': 'LOCATION_INITIALISED',
    'LOCATION_GET_ALL': 'LOCATION_GET_ALL',
    'LOCATION_CLEAR_ALL_DATA': 'LOCATION_CLEAR_ALL_DATA',
    'LOCATION_DELETE': 'LOCATION_DELETE',
    'LOCATION_ADD': 'LOCATION_ADD',
    'POSTCODE_SEARCH': 'POSTCODE_SEARCH',
    'POSTCODE_CLEAR': 'POSTCODE_CLEAR'
};

export type Action =
      { type: ActionTypes.WEATHER_SET_LOADING }
    | { type: ActionTypes.WEATHER_SET_REFRESHING }
    | { type: ActionTypes.WEATHER_GET_ALL , data: Array < WeatherModel >}
    | { type: ActionTypes.LOCATION_INITIALISED }
    | { type: ActionTypes.LOCATION_GET_ALL , data: Array < Location >}
    | { type: ActionTypes.LOCATION_CLEAR_ALL_DATA }
    | { type: ActionTypes.LOCATION_DELETE }
    | { type: ActionTypes.LOCATION_ADD }
    | { type: ActionTypes.POSTCODE_SEARCH , data: Array < Postcode >}
    | { type: ActionTypes.POSTCODE_CLEAR };
