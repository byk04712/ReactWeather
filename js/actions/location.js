/**
 * @flow
 */

'use strict';

import { Action, ActionTypes } from './types';
import { getAllWeather } from './weather';

import * as LocationService from '../services/location';

function initaliseLocations() {
    return (dispatch:any) => {
        LocationService.initialise().then(
            () => {
                dispatch({
                    type: ActionTypes.LOCATION_INITIALISED
                });
                dispatch(getAllWeather());
            }
        );
    };
}

function getAllLocations() {
    var result = LocationService.getAllLocations();
    return {
        type: ActionTypes.LOCATION_GET_ALL,
        data: result
    };
}

function clearAllLocationData() {
    return (dispatch:any) => {
        LocationService.clearAllData();
        dispatch({
            type: ActionTypes.LOCATION_CLEAR_ALL_DATA
        });
        dispatch(initaliseLocations());
    };
}

function deleteLocation(openWeatherId:string) {
    return (dispatch:any) => {
        LocationService.deleteLocation(openWeatherId);
        dispatch({
            type: ActionTypes.LOCATION_DELETE
        });
        dispatch(getAllLocations());
        dispatch(getAllWeather());
    };
}

function addLocation(name:string, postcode:string, state:string) {
    return (dispatch:any) => {
        LocationService.addLocation(name, postcode, state).then(
            (result) => {
                dispatch({
                    type: ActionTypes.LOCATION_ADD
                });
                dispatch(getAllLocations());
                dispatch(getAllWeather());
            }
        );
    };
}

module.exports = {
    initaliseLocations,
    getAllLocations,
    clearAllLocationData,
    deleteLocation,
    addLocation
};
